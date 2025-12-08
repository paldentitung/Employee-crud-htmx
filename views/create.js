const createTableData = (data) => /*html */ `
          <tr id="row-${data.id}">
            <td>${data.name}</td>
            <td>${data.position}</td>
            <td>${data.salary}</td>
            <td class="actions">
              <button class="btn" hx-get="/employee/${data.id}" hx-target=".modal" hx-swap="innerHTML">Edit</button>
              <button class="btn" hx-delete="/employee/${data.id}" hx-target="#row-${data.id}" hx-swap="outerHTML"> Delete</button>
            </td>
          </tr>



`;
export default createTableData;
