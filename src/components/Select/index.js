import React from 'react'
import PropTypes from 'prop-types';
import './main.css';
import SelectEvent from './SelectEvent';

class Select extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dropDown: false,
      inputValue: '',
      result: '',
      disable: this.props.disable,
      itemId: [],
      selectError: false,
      data: this.props.data
    }
  }
  dropDown(){
    if(this.state.disable === false){
      this.setState({ dropDown: !this.state.dropDown })
    }
  }
  cleanInput(){
    this.setState({
      inputValue: '',
      itemId: []
    })
    this.inp.value = '';
    this.inp.focus();
  }
  setValue(a, b){
    this.setState({inputValue: '', itemId: [], result: [a, b]});
    this.dropDown();
    this.props.selected(a);
  }
  onChangeInput(e){
    let itemsId = [];
    this.setState({inputValue: e.target.value, selectError: false});
    if(!e.target.value){
      this.setState({itemId: []});
      return false;
    }
    Object.keys(this.state.data).map((a, i)=>{
      this.state.data[a].map((b)=>{
        if( b.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 ){
          itemsId.push(b.id)
        }
      })
    })  
    if(!itemsId.length){
      this.setState({selectError: true});
      return false;
    }else{
      this.setState({itemId: itemsId})
    }
  }
  getListItem(item) {
    let flag = false;
      let children = (
          this.state.data[item].map((i, key) =>{
            if(!this.state.itemId.length){
              flag = true;
              return ( <li className="anim" onClick={()=>{this.setValue(i.name, i.groupName)}} key={key} >{i.name}</li> );
            }else{
              if(this.state.itemId.includes(i.id)){
                flag = true;
                return ( <li className="anim" onClick={()=>{this.setValue(i.name, i.groupName)}} key={key} >{i.name}</li> )
              }
            }
          })
      );
    if(flag){
      return (
        <>
          <li><strong>{item}</strong></li>
          {children}
        </>
      );
    }
  }
  getList(){
    if(!this.state.selectError){
      return Object.keys(this.state.data).map((a, i)=>{
        return this.getListItem(a);                                
      })
    }else{
      return ( <p className="notFound">{this.props.notFound}</p> )
    }
  }
  render(){
    return(
      <>
        <div className="select-component">
          <span className="select-label">{this.props.label}</span>
            <div className={this.state.disable ? "select-container disable" : "select-container"} > 
              <div className="select-input">
              {
                this.state.dropDown 
                ? 
                    <input
                    autoFocus
                    className="select-input-text"
                    ref={(inp)=>this.inp = inp}
                    onChange={(e)=>{this.onChangeInput(e)}} />  
                :
                    <div onClick={()=>{this.dropDown()}} className="select-result">
                      {!this.state.result 
                      ? 
                        this.props.placeholder
                      : 
                        <> { this.state.result[0] } <span className="group-label">{this.state.result[1]}</span> </>
                      }
                    </div>
              }
                <SelectEvent clean={()=>this.cleanInput()} dropDown={()=>this.dropDown()} empty={!this.state.inputValue} open={this.state.dropDown}/>
              </div>
              { 
                (this.state.dropDown)
                ?
                  <div className="dropdown-list">
                    <ul>
                    { this.getList() }
                    </ul> 
                  </div>
                :
                  null
              }
            </div>
        </div>

      </>
    );
  }
}



Select.propTypes = {
  data: PropTypes.object,
  label: PropTypes.string
};
Select.defaultProps = {
  label: 'Label',
  placeholder: 'Placeholder',
  notFound: 'Try typing something else'
};

export default Select;