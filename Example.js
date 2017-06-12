import Slider from './Slider'

const style = {
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fafafa'
}

export default {
  components: {
    Slider
  },
  render(h) {
    return (
      <div class='ExampleSliders'>
        <Slider
          loop={false}
          selected={0}
          showArrows={true}
          showNav={true}>
          <div style={{ background: '#21BB9A', ...style }}>
            <h1>A</h1>
          </div>
          <div style={{ background: '#329ADD', ...style }}>
            <h1>B</h1>
          </div>
          <div style={{ background: '#9A5CB9', ...style }}>
            <h1>C</h1>
          </div>
          <div style={{ background: '#E64C3C', ...style }}>
            <h1>D</h1>
          </div>
          <div style={{ background: '#2D3F52', ...style }}>
            <h1>E</h1>
          </div>
        </Slider>
      </div>
    )
  }
}
