import React , {createRef} from 'react'
import Axios from 'axios'

class Home extends React.Component{
    state={
        users:[],
        nama1:createRef(),
        usia1:createRef(),
        pekerjaan1:createRef()
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/users')
        .then((res)=>{
            this.setState({
               users : res.data
            })
            console.log(res.data)
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    adddata=()=>{
        var jso=this.state.users
        console.log(jso)
        var data={nama:this.state.nama1.current.value, usia: this.state.usia1.current.value, pekerjaan : this.state.pekerjaan1.current.value}
        console.log(data)
        jso.push(data)
        console.log(jso)
        this.setState(this.state.users=jso)
    }
    
    
    renderusers=()=>{
            
        return this.state.users.map((val,index)=>{
        
          return(
             
                    <>      
                    
                            <tr key={index+1}>
                            <td>{val.nama}</td>
                            <td>{val.usia}</td>
                            <td>{val.pekerjaan}</td>
                            <td> <input type='button' className='form-control btn-info' value='add Data' /></td>

                            </tr>
                    </>
                 )

            })

        }
        
    
    
    
    render(){
        return(
            <div>
                <h1>SOAL 1</h1>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <select className='form-control'>
                            <option>Filter By Pekerjaan</option>
                        </select>
                    </div>
                <table className='table mb-4'>
                <thead>
                    <tr>
                        <td>nama</td>
                        <td>usia</td>
                        <td>pekerjaan</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                {this.renderusers()}
                
                </tbody>


                </table>
                </div>
                
                <div className='row'>
                        <div className='col-md-3'> <input type='text' ref={this.state.nama1} className='form-control' placeholder='Nama' /> </div>
                        <div className='col-md-3'> <input type='text' ref={this.state.usia1} className='form-control' placeholder='Usia' /> </div>
                        <div className='col-md-3'> <input type='text' ref={this.state.pekerjaan1} className='form-control' placeholder='Pekerjaan' /> </div>
                        <div className='col-md-3'> <input type='button' onClick={()=>this.adddata()} className='form-control btn-info' value='add Data' /> </div>
                </div>
                </div>
                  
        )
    }
}

export default Home