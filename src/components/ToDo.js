import React from 'react';
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, Panel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class ToDo extends React.Component {
    state = {
        taskText: '',
        tasks: []
    };

    setTask = (taskText) => {
        this.setState({
            taskText: taskText
        });
        // console.log('STATE: task: ' + this.state.taskText);
    };

    addTaskElement = (e) => {
        e.preventDefault();     
        if (this.state.taskText !== '') {
            let arr = this.state.tasks;
            arr.push(this.state.taskText);
            this.setState({
                tasks: arr,
                taskText: ''
            });
        }
    };

    delTaskElement = (e) => {
        let arr = this.state.tasks;
        delete arr[e.target.id];
        this.setState({
            tasks: arr
        });
    };

    changeTaskStatus = (e) => {
        // console.log(e.target);
        e.target.classList.toggle('checked');
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'page'}>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Список задач</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Form horizontal onSubmit={this.addTaskElement}>
                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={8}>
                                            <FormControl type="text" placeholder="Новая задача" value={this.state.taskText} onChange={(e) => (this.setTask(e.target.value))}/>
                                        </Col>
                                        <Col componentClass={ControlLabel}  sm={4}>
                                            <Button onClick={this.addTaskElement}>Добавить</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Panel.Body>
                        </Panel>
                </div>

                <div className='list'>
                    <Panel>
                        <Form horizontal>
                            {
                                this.state.tasks.map((task, id) => {
                                    return <FormGroup className={'task'} key={id} onClick={this.changeTaskStatus}>
                                                <ControlLabel className={'task-text'}>{task}</ControlLabel>
                                                <Col componentClass={ControlLabel}>
                                                <Button className={'btn-task-del'} id={id} onClick={this.delTaskElement}>Удалить</Button>
                                                </Col>
                                            </FormGroup>
                                })
                            }
                        </Form>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default ToDo;