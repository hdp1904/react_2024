import React from 'react'
import Parent from './Parent';
import KeepingComponentsPure from './KeepingComponentsPure';
import AddingInteractivity from '../assets/AddingInteractivity';

export default function RenderingTheUI() {

    return (
        <div>
            <h1>RenderingTheUI</h1>
            <Parent />
            <KeepingComponentsPure />
            <AddingInteractivity />
        </div>
    )
}
