
export default (boats = [], action) => {
    switch(action.type) {
      case 'FETCH_ALL':
          return boats;
      case 'CREATE':
          return boats;
      default:
          return boats; 
}

}