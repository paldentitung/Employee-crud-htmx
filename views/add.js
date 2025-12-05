/**/
const createFormForData = () => /*html */ `
      <div class="modal-content">
        <form action="" hx-post="/employee" hx-target="tbody" hx-swap="afterbegin">
          <div class="form-row">
            <label for="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div class="form-row">
            <label for="position">Position</label>
            <input type="text" name="position" />
          </div>
          <div class="form-row">
            <label for="salary">Salary</label>
            <input type="number" name="salary" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div class="modal-close-btn">&times;</div>
`;
export default createFormForData;
