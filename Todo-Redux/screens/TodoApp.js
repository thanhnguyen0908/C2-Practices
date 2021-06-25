import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {StatusBar} from 'react-native';


import Spacer from '../components/Spacer';
import ButtonIcon from '../components/ButtonIcon';
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions';
import Icon from 'react-native-vector-icons/Ionicons'

// Test Data
// const data = [
//   {id: 1, task: "Do this stuff"},
//   {id: 2, task: "Do another stuff"},
// ]

const TodoApp = ({ todo_list, addTodo, deleteTodo }) => {
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    addTodo(task)
    setTask('')
  }

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
  }

  return (
    <View style={styles.container}>
      <Card title="Card Title">
        <Text style={styles.paragraph}>TODO APP WITH REDUX</Text>
      </Card>
      <Spacer />
      <Card>
        <Card.Content>
          <Title>Add ToDo Here:</Title>
          
          <TextInput
            mode="outlined"
            label="Task"
            value={task}
            onChangeText={task => setTask(task)}
          />
          <Spacer/>
          <Button mode="contained" onPress={handleAddTodo}>
            Add Task
          </Button>
        </Card.Content>
      </Card>
      <Spacer />
      <FlatList
        data={todo_list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <>
            <Card>
              <Card.Title
                title={`Task#${item.id}`}
                right={() => <ButtonIcon onPress={() => handleDeleteTodo(item.id)} />}
              />
              <Card.Content>
                <Paragraph>{item.task}</Paragraph>
              </Card.Content>
            </Card>
      <Spacer />
            </>
          );
        }}
      />
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    todo_list: state.todos.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
