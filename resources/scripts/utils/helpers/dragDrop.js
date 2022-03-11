import fetchData from "../../api/request.js";

const draggables = Array.from(document.querySelectorAll(".draggable"));
const dragContainers = document.querySelectorAll(".menu-content-item");
// const generalContainer = document.querySelector(".menu-content");

let elemId;
let parentElemId;
let dragDropData = {};

draggables.forEach((draggable) => {
  // DragStart
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    const dragging = document.querySelector(".dragging");
    dragging.parentElement.dataset.dragged = "isDragged";

    elemId = Number(dragging.id);
  });
  // DragEnd
  draggable.addEventListener("dragend", async (e) => {
    const draggedParent = document.querySelectorAll(`[data-dragged*="isDragged"]`)[0]; //draggedParent => menu-content-item => parent/child wrapper
    const extendedParent = draggable.parentElement;
    const draggedParentChildrens = Array.from(draggedParent.children);
    const extendedParentChildrens = Array.from(extendedParent.children);
    console.log("extendedParentChildrens in dragEnd", extendedParentChildrens); // an array of elements

    // Making a parent sibling child and/or parent to child
    if (
      !draggedParentChildrens.length &&
      extendedParentChildrens[0].classList.contains("menu-content-item-parent") &&
      draggable.classList.contains("menu-content-item-parent")
    ) {
      draggable.classList.remove("menu-content-item-parent");
      draggable.classList.add("menu-content-item-child");
      parentElemId = Number(extendedParentChildrens[0].id);
      console.log("parentElemId/IF-1", parentElemId);
    } else if (
      extendedParentChildrens[0].classList.contains("menu-content-item-parent") &&
      draggable.classList.contains("menu-content-item-child")
    ) {
      draggable.classList.remove("menu-content-item-child");
      draggable.classList.add("menu-content-item-parent");
      parentElemId = Number(extendedParentChildrens[0].id);
      console.log("parentElemId/IF-2", parentElemId);
    }
    if (
      // Turning a first child item into a parent if a parent was dragged
      draggedParentChildrens.length &&
      draggable.classList.contains("menu-content-item-parent")
    ) {
      draggable.classList.remove("menu-content-item-parent");
      draggable.classList.add("menu-content-item-child");
      draggedParentChildrens[0].classList.remove("menu-content-item-child");
      draggedParentChildrens[0].classList.add("menu-content-item-parent");
      parentElemId = Number(extendedParentChildrens[0].id);
      console.log("draggedParentChildrens/IF-3", draggedParentChildrens);
      console.log("parentElemId/IF-3", parentElemId);
    } else if (
      // Turning a child item into parent after inserted before
      draggedParentChildrens.length &&
      draggable.classList.contains("menu-content-item-child")
    ) {
      draggable.classList.remove("menu-content-item-child");
      draggable.classList.add("menu-content-item-parent");
      extendedParentChildrens[1].classList.remove("menu-content-item-parent");
      extendedParentChildrens[1].classList.add("menu-content-item-child");
      parentElemId = Number(extendedParentChildrens[0].id);
      console.log("parentElemId/IF-4", parentElemId);
    }

    draggable.classList.remove("dragging");

    // Removing an empty wrapper of dragged item
    if (!draggedParentChildrens.length) {
      draggedParent.remove();
    }

    delete draggedParent.dataset.dragged;

    dragDropData.id = elemId;
    dragDropData.parent_id = parentElemId;
    console.log("dragDropData", dragDropData);

    let formData = new FormData();
    for (let key in dragDropData) {
      formData.append(key, dragDropData[key]);
    }
    const data = await fetchData.request(`api/change-menu`, "POST", formData);
    console.log("data after fetch", data);
  });
});

dragContainers.forEach((dragContainer) => {
  dragContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    const elemAfterDrag = getElemAfterMinorDrag(dragContainer, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (!elemAfterDrag) {
      dragContainer.appendChild(draggable);
    } else {
      dragContainer.insertBefore(draggable, elemAfterDrag);
    }
    console.log("drag over minor");
  });
});
function getElemAfterMinorDrag(dragContainer, y) {
  const draggableElements = [...dragContainer.querySelectorAll(".draggable:not(.dragging)")];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// For handling dragDrop over general container

// generalContainer.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   const elemAfterDrag = getElemAfterGeneralDrag(generalContainer, e.clientY);
//   const draggable = document.querySelector(".dragging");

//     if (!elemAfterDrag) {
//       generalContainer.appendChild(draggable);
//     }else {
//       generalContainer.insertAdjacentElement(draggable, elemAfterDrag);
//     }
//   console.log("drag over general");
// });

// function getElemAfterGeneralDrag(generalContainer, y) {
//   const draggableElements = [...generalContainer.querySelectorAll(".draggable:not(.dragging)")];

//   console.log("draggableElements", draggableElements);

//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;

//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child };
//       } else {
//         return closest;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }
