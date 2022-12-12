test('should first', () => { 
    
    const isActive = true;

    // Si isActive es diferente a true manda error
    if( !isActive ){
        throw new Error('No está Activo');
    }

 })