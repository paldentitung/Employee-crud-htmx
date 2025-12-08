const createEditForm = (emp) => /*html */ `
  <div class="modal-content">
    <form 
      hx-put="/employee/${emp.id}" 
      hx-target="#row-${emp.id}" 
      hx-swap="outerHTML"
    >
      <div class="form-row">
        <label for="name">Name</label>
        <input type="text" name="name" value="${emp.name}" />
      </div>
      <div class="form-row">
        <label for="position">Position</label>
        <input type="text" name="position" value="${emp.position}" />
      </div>
      <div class="form-row">
        <label for="salary">Salary</label>
        <input type="number" name="salary" value="${emp.salary}" />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  </div>

  <div class="modal-close-btn">&times;</div>
`;

export default createEditForm;
