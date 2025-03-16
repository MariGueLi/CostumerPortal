import './Category.css';

function Category() {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
          <label className='sidebar-label-container'>
          <input type='radio' name='test'/>
          <span className='checkmark'></span> Category 1
          </label>
          <label className='sidebar-label-container'>
          <input type='radio' name='test'/>
          <span className='checkmark'></span> Category 2
          </label>
          <label className='sidebar-label-container'>
          <input type='radio' name='test'/>
          <span className='checkmark'></span> Category 3
          </label>
          <label className='sidebar-label-container'>
          <input type='radio' name='test'/>
          <span className='checkmark'></span> Category 4
          </label>
          <label className='sidebar-label-container'>
          <input type='radio' name='test'/>
          <span className='checkmark'></span> Category 5
          </label>
      </div>
      
      </div>
  )
}


export default Category;