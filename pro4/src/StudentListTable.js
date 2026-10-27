
import React from "react";

const studentlist = [
  {
    slno: 1,
    name: "stud1",
    usn: "rvc1",
    tmarks: 150,
  },
  {
    slno: 2,
    name: "stud2",
    usn: "rvc2",
    tmarks: 145,
  },
];

class StudentRow extends React.Component {
  render() {
    const stud1 = this.props.std1;

    return (
      <tr>
        <td>{stud1.slno}</td>
        <td>{stud1.name}</td>
        <td>{stud1.usn}</td>
        <td>{stud1.tmarks}</td>
      </tr>
    );
  }
}

class StudentsTable extends React.Component {
  render() {
    const studrows = this.props.studlist.map((stud1) => (
      <StudentRow key={stud1.slno} std1={stud1} />
    ));

    return (
      <table border="1">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Student Name</th>
            <th>USN</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>{studrows}</tbody>
      </table>
    );
  }
}

class StudentAddSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = document.forms.studAdd;

    const stud1 = {
      name: form.name.value,
      usn: form.usn.value,
      tmarks: form.tmarks.value,
    };

    console.log("stud1:", stud1);

    this.props.CreateStudentAdd(stud1);

    form.name.value = "";
    form.usn.value = "";
    form.tmarks.value = "";
  }

  render() {
    return (
      <form name="studAdd" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="text"
          name="usn"
          placeholder="USN"
          required
        />

        <input
          type="number"
          name="tmarks"
          placeholder="Total Marks"
          required
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}

class StudentListTable extends React.Component {
  constructor() {
    super();

    this.state = {
      newStudList: [],
    };

    this.CreateStudentAdd = this.CreateStudentAdd.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        newStudList: studentlist,
      });
    }, 5000);

    console.log("I have loaded the student add component also");
  }

  CreateStudentAdd(stud1) {
    const studentlength = this.state.newStudList.length + 1;

    stud1.slno = studentlength;

    const newstudlist = this.state.newStudList.slice();

    newstudlist.push(stud1);

    this.setState({
      newStudList: newstudlist,
    });
  }

  render() {
    return (
      <React.Fragment>
        <hr />

        <StudentsTable studlist={this.state.newStudList} />

        <hr />

        <StudentAddSubmit CreateStudentAdd={this.CreateStudentAdd} />
      </React.Fragment>
    );
  }
}

export default StudentListTable;
