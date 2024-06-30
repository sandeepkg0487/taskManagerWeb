import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

const TicketModal = ({ show, handleClose, handleSave }) => {
    const initialValues = {
        ticketNo: '',
        title: '',
        description: '',
        status: 'pending',
        priority: 'low',
        dueDate: '',
        assignedTo: [],
        projectId: '',
    };

    const validationSchema = Yup.object().shape({
        ticketNo: Yup.string().required('Ticket No is required'),
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        dueDate: Yup.date().required('Due Date is required'),
        assignedTo: Yup.array().min(1, 'Assign at least one user'),
        projectId: Yup.string().required('Project ID is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            handleSave(values);
        },
    });
   
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" },
    ];

    const projects = [
        { value: 'project1', label: 'Project 1' },
        { value: 'project2', label: 'Project 2' },
        { value: 'project3', label: 'Project 3' },
        // Add more projects as needed
    ];
    const [value, setValue] = useState([

        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" },
    ]);
    const [colourOptions, setColourOptions] = useState([
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" },
        { label: "falsss 🍓", value: "fssaf" },
    ]);

    const onChange = (
        newValue,
        actionMeta
    ) => {

        console.log(newValue,
            actionMeta.option)


        switch (actionMeta.action) {
            case 'remove-value':
            case 'pop-value':
                if (actionMeta.removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                newValue = colourOptions.filter((v) => v.isFixed);
                break;
        }

       formik.setFieldValue('assignedTo',newValue)

    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="ticketNo">
                        <Form.Label>Ticket No</Form.Label>
                        <Form.Control
                            type="text"
                            name="ticketNo"
                            value={formik.values.ticketNo}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.ticketNo && !!formik.errors.ticketNo}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.ticketNo}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.title && !!formik.errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.title}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.description && !!formik.errors.description}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.description}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.status && !!formik.errors.status}
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="in-progress">In Progress</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="priority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="select"
                            name="priority"
                            value={formik.values.priority}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.priority && !!formik.errors.priority}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="dueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="dueDate"
                            value={formik.values.dueDate}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.dueDate && !!formik.errors.dueDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.dueDate}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="assignedTo">
                        <Select
                            value={formik.values.assignedTo}
                            isMulti
                            onChange={onChange}
                            options={options} 
                            closeMenuOnSelect={false}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.assignedTo}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="projectId">
                        <Form.Label>Project ID</Form.Label>
                        <Form.Control
                            as="select"
                            name="projectId"
                            value={formik.values.projectId}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.projectId && !!formik.errors.projectId}
                        >
                            <option value="">Select Project</option>
                            {projects.map((project) => (
                                <option key={project.value} value={project.value}>
                                    {project.label}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.projectId}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Save
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TicketModal;