// Main file to load and switch between PixiJS examples

import { Application } from 'pixi.js';

( async ()=>{

  const app = new Application();
  await app.init({backgroundColor:'seagreen', height:600, width:400});
  document.getElementById('app')?.appendChild(app.canvas);  

  const examples: any = {
    basics: () => import('../examples/basic-setup/index')
  }


const exampleSelector = document.createElement('select');
exampleSelector.innerHTML = `
    <option value="">Select an Example</option>
    <option value="basics">Basics</option>
    <option value="container">Container</option>
    <option value="spritesheet">Spritesheet</option>
    <option value="interaction">Interaction</option>
    <option value="filters">Filters</option>
    <option value="text">Text</option>
    <option value="graphics">Graphics</option>
`;

document.body.appendChild(exampleSelector);

exampleSelector.addEventListener('change', async function (){
  const s :string = this.value;
  console.log(this.value);
  if (examples[s]) {
          document.getElementById('app')?.innerHTML.cle
          app.stage.removeChildren(); // Clear stage
          const module = await examples[s]();
          if (module.default) module.default(app); // Run the example
      }
  
})

// exampleSelector.addEventListener('change', async (event) => {
//   const selectedExample = event.target.value;
//   if (examples[selectedExample]) {
//       app.stage.removeChildren(); // Clear stage
//       const module = await examples[selectedExample]();
//       if (module.default) module.default(app); // Run the example
//   }

})();


