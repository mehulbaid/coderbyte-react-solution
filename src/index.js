import React from 'react';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';

const data = [
  { userFirstname: 'Jon', userLastname: 'Snow', userPhone: '232323' },
  { userFirstname: 'Jerry', userLastname: 'Patel', userPhone: '123123' }
]

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
};

function PhoneBookForm(props) {

  const { register, handleSubmit } = useForm();
  const onSubmit = d => props.handleFormValue(d);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        ref={register}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        ref={register}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        ref={register}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User'
      />
    </form>
  )
}

function InformationTable(props) {

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {
          props.data.map((row, idx) => (
            <tr key={idx}>
              <td key={row.userFirstname[idx]}>{row.userFirstname}</td>
              <td key={row.userLastname[idx]}>{row.userLastname}</td>
              <td key={row.userPhone[idx]}>{row.userPhone}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

class Application extends React.Component {

  state = {
    data: data
  }

  handleInputValue = (d) => this.setState({data: [...data, d]})

  render() {
    return (
      <section>
        <PhoneBookForm handleFormValue={this.handleInputValue} />
        <InformationTable data={this.state.data} />
      </section>
    );
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);