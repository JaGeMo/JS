import React from 'react'
import { forOfStatement, whileStatement } from 'babel-types';

export default () => {
  return (
    <footer className="bg-dark mt-5 p-4 text-center text-white">
      Copyright &copy; {new Date().getFullYear()} MeldeCenter Aim
    </footer>
  )
}
