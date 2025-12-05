const createTableData = (data) => /*html */ `
          <tr>
            <td>${data.name}</td>
            <td>${data.position}</td>
            <td>${data.salary}</td>
            <td class="actions">
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
            </td>
          </tr>
`;
export default createTableData;
