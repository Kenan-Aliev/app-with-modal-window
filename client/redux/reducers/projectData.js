const initialState = {
  projectData: [
    {
      title: 'Терапевтический корпус',
      start_date: '08.04.2019',
      end_date: '10.10.2019',
      admin: 'Денис Конев',
      superVisor: 'Гросолим Лимитед',
      image: 'https://nordin.by/files/images/124.jpg'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PROJECTDATA':
      return { ...state, projectData: [...state.projectData, action.projectData] }
    default:
      return state
  }
}
