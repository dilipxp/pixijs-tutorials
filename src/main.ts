// Main file to load and switch between PixiJS examples

import { Application } from 'pixi.js';

( async ()=>{

  const defaultApp = createApp();
  await defaultApp.init({backgroundColor:'seagreen', height:600, width:800});
  document.getElementById('app')?.appendChild(defaultApp.canvas);  

  const examples: any = {
    basics: () => import('../examples/basic-setup/index'),
    container: () => import('../examples/container/index')
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
          defaultApp.stage.removeChildren(); // Clear stage
          const module = await examples[s]();
          if (module.default) module.default(defaultApp); // Run the example
      }
  
})


})();


function createApp(): Application{
  return new Application();
}



