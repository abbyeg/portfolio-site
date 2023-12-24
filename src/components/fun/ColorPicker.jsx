const ColorPicker = () => {
  let colors = [
    '#EF4848', // red
    '#EE82EE', // pink
    '#FFEB22', // yellow
    '#489cef', // blue
    '#ef9b48', // orange
    '#48ef9b', // green
  ];
  
  const updateColor = () => {
    let pos = getRandomInt(colors.length);
    document.getElementById('cursor-glow').style.setProperty('--cursor-color', colors[pos]);
    let r = document.querySelector('#root');
    r.style.setProperty('--selection-bg-color', colors[pos]);
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  return (
    <div className="fixed text-6xl left-0 bottom-0 m-6">
      <button className="slow-pulse" onClick={updateColor}>*</button>
    </div>
  );
};

ColorPicker.propTypes = {
};

export default ColorPicker;
