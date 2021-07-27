import './app.scss';
import React, {useEffect, useState, useReducer} from 'react';
import UsersTable from "./components/users-table";
import UsersTableHeader from "./components/users-table-header";
import AddUserModal from "./components/add-user-modal";
import TableContext from "./context/TableContext";

const SERVER_URL = 'http://localhost:4005';

const initialState = {
  addUserModal: false,
  changeStatusModal: false
};

function modalReducer(state, action) {

  switch(action.type) {

    case 'open-user-modal':
      return {
        addUserModal: true,
        changeStatusModal: false
      };
    case 'close-user-modal':
      return {
        addUserModal: false,
        changeStatusModal: false
      }
    default:
      return state;

  }

}

function App() {

  const [users, setUsers] = useState([]);
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const columns = [
    {
      id: 'name',
      name: 'Name',
      visible: true
    },
    {
      id: 'status',
      name: 'Status',
      visible: true
    },
    {
      id: 'address',
      name: 'Address',
      visible: true
    }
  ]

  useEffect(() => {
    if(!users.length) {
      fetch(SERVER_URL + '/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
        });
    }
  }, []);

  return (
    <div className="App">

      {users.length &&
        <TableContext.Provider value={{ state, dispatch }}>
          <UsersTableHeader />
          <UsersTable columns={columns} users={users}/>
        </TableContext.Provider>
      }
      {state.addUserModal && <AddUserModal />}
    </div>
  );
}

export default App;
