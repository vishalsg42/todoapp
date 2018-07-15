import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

class App extends React.Component {

  state = {
    text: "",
    todo: ['BAll','Bat','Stumps']
  }

  addTodo =()=> {
    let newText = this.state.text;
    let newTodo = this.state.todo;
    newTodo.push(newText);
    return this.setState({todo: newTodo,text:null});
  }

  deletTodo= (item)=> {
    var actualTodo = this.state.todo;
    var pos = actualTodo.indexOf(item);
    actualTodo.splice(pos,1)
    this.setState({todo: actualTodo})
  }

  getTodo= ()=> {
    return this.state.todo.map((t,i)=>{
      return  <TouchableOpacity key={i}>
                <Text 
                    onPress= {()=> this.deletTodo(t)}
                >{t}</Text>
              </TouchableOpacity>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.header}>Notes Add</Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=> this.setState({text})} 
            value={this.state.text}  
          />
        <Button 
          title='Add todo'
          onPress={this.addTodo}
        />
        {this.getTodo()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#b3e5fc"
  },
  header: {
    fontSize: 36,
    color: '#ff8d00',
    fontWeight: '900'
  },
  box: {
    marginTop:20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputStyle: {
    width: 100,
    height: 40,
    borderColor: 'blue',
    borderWidth:1
  }
});

export default  App;