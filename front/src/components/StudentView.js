import React from 'react';

const StudentView = ({students}) => (
        <ul>
            {
                students.map(student => (
                <li key={student.id}>{student.student_id}{student.yyyy_mm_dd_hh
                }</li>
            ))
            }
        </ul>

    );

export default StudentView;
