// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as projectsThunks from 'redux/projects/thunks';
// import * as timesheetsThunks from 'redux/timesheets/thunks';
// import * as employeesThunks from 'redux/employees/thunks';
// import Loader from 'Components/Shared/Loader';
import PieChart from '../Charts/Pie';
import BarChart from '../Charts/Bars';
import LineChart from '../Charts/Line';
import styles from '../report.module.css';
import { project, projectTimesheets } from './mock'; // delete after database update

const ProjectReport = () => {
  const MILIS_PER_DAY = 86400000;
  // const dispatch = useDispatch();
  // const projects = useSelector((state) => state.projects.list);
  // const projectTimesheets = useSelector((state) => state.timesheet.listFromProject);
  // const isProjectsFetching = useSelector((state) => state.projects.isFetching);
  // const isTimesheetsFetching = useSelector((state) => state.timesheet.isFetching);
  // const projectId = '62c377590aedc7c1fac7e897'; // DELETE THIS LATER
  // useEffect(() => {
  //   dispatch(projectsThunks.getProjects());
  //   dispatch(timesheetsThunks.getTimesheetsFromProject(projectId, null));
  //   dispatch(employeesThunks.getEmployees());
  // }, []);

  // const project = projects?.find((project) => project._id === projectId);

  // Basic table formatter
  const projectTimesheetsMap = projectTimesheets
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((ts) => {
      const id = ts.employeeId._id;
      const rate = ts.projectId.team.find((item) => item.employeeId === id).rate;
      // what a mess.. but it works yay! :D
      return {
        ...ts,
        date: new Date(ts.date).toISOString().split('T')[0],
        rate
      };
    });
  // console.log('ts map:', projectTimesheetsMap);

  // Project contributions by employees (hours and rate)
  const projectContr = projectTimesheetsMap
    .map((item) => {
      const { date, employeeId, hours, rate } = item;
      const { _id, firstName, lastName } = employeeId;
      return {
        date,
        hours,
        rate,
        _id,
        firstName,
        lastName
      };
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Day by day contributions
  const projectContrByDay = (data, fillZero = false) => {
    const initDate = data[0].date;
    const initDateNum = Number(new Date(initDate));
    const endDate = data[data.length - 1].date;
    const dayDiff = (new Date(endDate) - new Date(initDate)) / MILIS_PER_DAY;
    const team = project?.team.map((member) => {
      return {
        ...member.employeeId,
        rate: member.rate
      };
    });
    let dayList = [];

    // First a list of the days between start and end
    for (let i = 0; i <= dayDiff; i++) {
      const dateToAppend = new Date(MILIS_PER_DAY * i + initDateNum).toISOString().split('T')[0];
      dayList.push(dateToAppend);
    }

    // Then we map each contribution
    const transposedEmpContr = dayList
      .map((day) => {
        return {
          date: day,
          contr: data.filter((dataItem) => dataItem.date === day)
        };
      })
      .map((item) => {
        return team.map((teamItem) => {
          const hours = item.contr
            .filter((contrItem) => {
              return teamItem._id === contrItem._id;
            })
            .map((hour) => hour.hours)
            .reduce((prev, curr) => prev + curr, 0);
          if (fillZero) {
            return hours;
          } else {
            return hours > 0 ? hours : null;
          }
        });
      });

    let empContr = [];
    for (let i = 0; i < team.length; i++) {
      let auxArr = [];
      transposedEmpContr.map((item) => {
        auxArr.push(item[i]);
      });
      empContr.push(auxArr);
    }

    // Last but not least, Join everything
    return {
      label: dayList,
      teamLabel: team.map((item) => item.firstName),
      data: empContr
    };
  };

  // Segmented by employee (_id, firstName, lastName, rate, hours, totalRate)
  const segmentedByEmployee = project?.team.map((member) => {
    const hours = projectTimesheets
      .filter((ts) => {
        return ts.employeeId._id === member.employeeId._id;
      })
      .reduce((prev, curr) => {
        return prev + curr.hours;
      }, 0);
    return {
      ...member.employeeId,
      rate: member.rate,
      hours,
      totalRate: hours * member.rate
    };
  });

  const totalHours = projectTimesheets.reduce((prev, curr) => {
    return prev + curr.hours;
  }, 0);

  const totalRate = projectTimesheetsMap.reduce((prev, curr) => {
    return prev + curr.rate * curr.hours;
  }, 0);

  // if (isProjectsFetching || isTimesheetsFetching) {
  //   return <Loader isLoading={true} />;
  // }
  return (
    <div className={styles.reportContainer}>
      <h2>{`${project?.name}`}</h2>
      <p>
        From{' '}
        {`${projectTimesheetsMap[0]?.date} to ${
          projectTimesheetsMap[projectTimesheetsMap.length - 1]?.date
        }`}
      </p>
      <div className={styles.tablesContainer}>
        <table className={styles.extendedTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Hours</th>
              <th>Task</th>
              <th>Employee</th>
              <th>Rate</th>
              <th>TS Cost</th>
            </tr>
          </thead>
          <tbody>
            {projectTimesheetsMap.map((timesheet) => {
              return (
                <tr key={timesheet._id}>
                  <td>{timesheet.date}</td>
                  <td>{timesheet.hours}</td>
                  <td>{timesheet.taskId?.taskName}</td>
                  <td>{timesheet.employeeId.firstName}</td>
                  <td>{timesheet.rate}</td>
                  <td>{timesheet.hours * timesheet.rate}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total:</td>
              <td>{totalHours}</td>
              <td></td>
              <td></td>
              <td>{totalRate}</td>
            </tr>
          </tfoot>
        </table>
        <div className={styles.graphContainer}>
          <PieChart
            title="Hours"
            data={segmentedByEmployee ?? []}
            label="firstName"
            value="hours"
          />
        </div>
        <div className={styles.graphContainer}>
          <PieChart
            title="Total Rate"
            data={segmentedByEmployee ?? []}
            label="firstName"
            value="totalRate"
          />
        </div>
        <table className={styles.condensedTable}>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Total Hours</th>
              <th>Hourly Rate</th>
              <th>Total Rate</th>
            </tr>
          </thead>
          <tbody>
            {segmentedByEmployee?.map((employee) => {
              return (
                <tr key={`${employee._id}segemp`}>
                  <td>{employee.firstName}</td>
                  <td>{employee.hours}</td>
                  <td>{employee.rate}</td>
                  <td>{employee.rate * employee.hours}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.barsContainer}>
          <BarChart
            title="Historic rate"
            data={projectContrByDay(projectContr)}
            label="date"
            colorScheme="niceScheme"
          />
        </div>
        <div className={styles.barsContainer}>
          <LineChart
            title="Historic rate"
            data={projectContrByDay(projectContr, true)}
            label="date"
            colorScheme="niceScheme"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectReport;
