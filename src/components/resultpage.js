import { useSelector } from "react-redux";

const ShowResult = () => {
  const data = useSelector((state) => state.user.users);
  console.log(data);
  return (
    <div>
      <h3>here are results:</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default ShowResult;
