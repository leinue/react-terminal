import React, {Component} from 'react';
import Xterm from './fit';

const shellPrompt = '> ';
const term = new Xterm();

term.prompt = function () {
  term.write('\r\n' + shellPrompt);
};

term.on('key', function (key, ev) {
  var printable = (!ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey);

  if (ev.keyCode == 13) {
    term.prompt();
  } else if (ev.keyCode == 8) {
    /*
     * Do not delete the prompt
     */
    if (term.x > 2) {
      term.write('\b \b');
    }
  } else if (printable) {
    term.write(key);
  }
});

class Terminal extends Component {
	componentDidMount() {
		const terminalContainer = document.getElementById('terminal-container');

		term.open(terminalContainer);
		term.fit();

		term.writeln('Welcome to xterm.js');
		term.writeln('Just type some keys in the prompt below.');
		term.writeln('');
		term.prompt();
	}
  render() {
		return <div id="terminal-container"></div>;
  }
}

export default Terminal