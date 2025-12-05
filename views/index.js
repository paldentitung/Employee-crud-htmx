const createHomePage = () => /*html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/index.css" />
    <script
      src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"
      integrity="sha384-/TgkGk7p307TH7EXJDuUlgG3Ce1UVolAOFopFekQkkXihi5u/6OCvVKyz1W+idaz"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
    <div class="header">
       <span class="title">Employee CRUD with HTMX</span>
        <button class="add-button" hx-get="/employee" hx-target=".modal" hx-swap="innerHTML">Add</button>
    </div>

      <table>
        <thead>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td>Ram Tamang</td>
            <td>HR</td>
            <td>10,000</td>
            <td class="actions">
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal"></div>
    <script src="/script.js"></script>

  </body>
</html>

`;

export default createHomePage;
