import { useEffect, useState } from 'react';
import AddTimeSheets from '../Add';
import EditTimeSheets from '../Edit';
import Sidebar from 'Components/Shared/Sidebar';
import Loader from 'Components/Shared/Loader';
import * as thunks from 'redux/timesheets/thunks';
import * as actions from 'redux/timesheets/actions';
import * as tasksThunks from 'redux/tasks/thunks';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeTimesheetTable from 'Components/Shared/EmployeeTimesheetTable';

function TimeSheet() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  let role = useSelector((state) => state.auth.authenticated.role);
  // let role = 'PM';
  // let role = 'EMPLOYEE';
  const dispatch = useDispatch();
  const timeSheets = useSelector((state) => state.timesheet.list);
  const isFetching = useSelector((state) => state.timesheet.isFetching);
  const [editId, setEditId] = useState('');
  const showCreateModal = useSelector((state) => state.timesheet.showCreateModal);
  const showEditModal = useSelector((state) => state.timesheet.showEditModal);

  useEffect(() => {
    if (role === 'PM') {
      dispatch(thunks.getTimesheets());
    } else {
      dispatch(thunks.getEmployeeTimesheets(currentUser._id));
    }
    dispatch(tasksThunks.getTasks());
  }, [timeSheets.length]);
  const allTasks = useSelector((state) => state.tasks.list);
  const deleteTimeSheet = (id) => {
    const resp = confirm('Are you sure you want to delete it?');
    console.log(id);
    if (resp) {
      dispatch(thunks.deleteTimesheets(id));
    }
  };
  const openAddTimeSheet = () => {
    dispatch(actions.showCreateModal());
  };
  const openEditTimeSheet = (id) => {
    setEditId(id);
    dispatch(actions.showEditModal());
  };
  const handleClose = () => {
    dispatch(actions.closeModals());
  };
  const formattedTimeSheets = timeSheets.map((timeSheet) => {
    return {
      _id: timeSheet._id,
      employeeId: `${timeSheet.employeeId.firstName} ${timeSheet.employeeId.lastName}`,
      projectId: timeSheet.projectId.name,
      date: timeSheet.date ? new Date(timeSheet.date).toISOString().split('T')[0] : '',
      taskId: timeSheet.taskId?.taskName,
      hours: timeSheet.hours,
      approved: timeSheet.approved ? 'Approved' : 'Disapoproved',
      isDeleted: false
    };
  });
  formattedTimeSheets.reverse();
  const approveTimesheet = (id) => {
    console.log('slider ', id);
    console.log('sliderrrr ', timeSheets);
    // dispatch(thunks.editTimesheet(newBody, id));
    // setEditId(id);
    // console.log(editId);
  };

  return (
    <>
      <Loader isLoading={isFetching} />
      <Sidebar />
      <EditTimeSheets
        showEditModal={showEditModal}
        handleClose={handleClose}
        editId={editId}
        allTasks={allTasks}
        role={role}
        currentUser={currentUser}
      />
      <AddTimeSheets
        showCreateModal={showCreateModal}
        handleClose={handleClose}
        allTasks={allTasks}
        role={role}
        currentUser={currentUser}
      ></AddTimeSheets>
      <EmployeeTimesheetTable
        title={role}
        headers={['EMPLOYEE', 'Project', 'Start date', 'Task', 'Hours', 'Status', 'Edit', 'Delete']}
        keys={['employeeId', 'projectId', 'date', 'taskId', 'hours', 'approved']}
        data={formattedTimeSheets}
        role={role}
        onEdit={openEditTimeSheet}
        onAdd={openAddTimeSheet}
        onDelete={deleteTimeSheet}
        onApprove={approveTimesheet}
      />
    </>
  );
}
export default TimeSheet;
