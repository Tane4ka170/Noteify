import React from 'react';
import { NoteForm } from '../components/NoteForm';

export function NewNote() {
    return (
        <div>
            <h1 className='mb-4'>NewNote</h1>
            <NoteForm/>
        </div>
    );
}
