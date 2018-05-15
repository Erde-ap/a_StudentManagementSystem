import React from 'react';

const StudentView = ({student}) => (
    <ul className='flex'>
        {
            student.map(student => (
                <li key={student.number}>{student.number} | {student.name}</li>
            ))
        }
    </ul>
);

export default StudentView;
