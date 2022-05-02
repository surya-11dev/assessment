
   
  const durations = [1000, 5000, 3000]
   
  const promises = []  
   
  durations.map((duration) => {
     
      
    promises.push(tOut(duration))
  })
   
  document.write(promises)
   
  
  Promise.all(promises).then(response => document.write(response))
   
