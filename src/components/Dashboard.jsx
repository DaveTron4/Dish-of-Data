import { useState, useEffect } from 'react'
import '../App.css'

function Dashboard({ list }) {
 
  return (
    <div className='dashboard-container'>
        <table className="recipe-table">
            <thead>
                <tr>
                <th>Name of Recipe</th>
                <th>Ready in</th>
                <th>Servings</th>
                <th>Health Score</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((recipe) => (
                <tr key={recipe.id}>
                    <td>{recipe.title}</td>
                    <td>{recipe.readyInMinutes} min</td>
                    <td>{recipe.servings}</td>
                    <td>{recipe.healthScore}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard
