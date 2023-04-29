function generateHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

/* IT JUST WORKS. */
const myMarkup = generateHtml(`
<div class="wrapper">
  <h1 class="heading">Virtual Keyboard</h1>
  <textarea class="textarea"></textarea>
  <div class="keyboard">
    <div class="row">
      <div class="key backquote">
        <span class="eng">
          <span class="lower">&#96;</span>
          <span class="upper none">~</span>
          <span class="caps none">&#96;</span>
          <span class="caps-shift none">~</span>
        </span>
        <span class="rus none">
          <span class="lower">ё</span>
          <span class="upper none">Ё</span>
          <span class="caps none">Ё</span>
          <span class="caps-shift none">ё</span>
        </span>
      </div>
      <div class="key one">
        <span class="eng">
          <span class="lower">1</span>
          <span class="upper none">!</span>
          <span class="caps none">1</span>
          <span class="caps-shift none">!</span>
        </span>
        <span class="rus none">
          <span class="lower">1</span>
          <span class="upper none">!</span>
          <span class="caps none">1</span>
          <span class="caps-shift none">!</span>
        </span>
      </div>
      <div class="key two">
        <span class="eng">
          <span class="lower">2</span>
          <span class="upper none">@</span>
          <span class="caps none">2</span>
          <span class="caps-shift none">@</span>
        </span>
        <span class="rus none">
          <span class="lower">2</span>
          <span class="upper none">"</span>
          <span class="caps none">2</span>
          <span class="caps-shift none">"</span>
        </span>
      </div>
      <div class="key three">
        <span class="eng">
          <span class="lower">3</span>
          <span class="upper none">#</span>
          <span class="caps none">3</span>
          <span class="caps-shift none">#</span>
        </span>
        <span class="rus none">
          <span class="lower">3</span>
          <span class="upper none">№</span>
          <span class="caps none">3</span>
          <span class="caps-shift none">№</span>
        </span>
      </div>
      <div class="key four">
        <span class="eng">
          <span class="lower">4</span>
          <span class="upper none">$</span>
          <span class="caps none">4</span>
          <span class="caps-shift none">$</span>
        </span>
        <span class="rus none">
          <span class="lower">4</span>
          <span class="upper none">;</span>
          <span class="caps none">4</span>
          <span class="caps-shift none">;</span>
        </span>
      </div>
      <div class="key five">
        <span class="eng">
          <span class="lower">5</span>
          <span class="upper none">%</span>
          <span class="caps none">5</span>
          <span class="caps-shift none">%</span>
        </span>
        <span class="rus none">
          <span class="lower">5</span>
          <span class="upper none">%</span>
          <span class="caps none">5</span>
          <span class="caps-shift none">%</span>
        </span>
      </div>
      <div class="key six">
        <span class="eng">
          <span class="lower">6</span>
          <span class="upper none">^</span>
          <span class="caps none">6</span>
          <span class="caps-shift none">^</span>
        </span>
        <span class="rus none">
          <span class="lower">6</span>
          <span class="upper none">:</span>
          <span class="caps none">6</span>
          <span class="caps-shift none">:</span>
        </span>
      </div>
      <div class="key seven">
        <span class="eng">
          <span class="lower">7</span>
          <span class="upper none">&</span>
          <span class="caps none">7</span>
          <span class="caps-shift none">&</span>
        </span>
        <span class="rus none">
          <span class="lower">7</span>
          <span class="upper none">?</span>
          <span class="caps none">7</span>
          <span class="caps-shift none">?</span>
        </span>
      </div>
      <div class="key eight">
        <span class="eng">
          <span class="lower">8</span>
          <span class="upper none">*</span>
          <span class="caps none">8</span>
          <span class="caps-shift none">*</span>
        </span>
        <span class="rus none">
          <span class="lower">8</span>
          <span class="upper none">*</span>
          <span class="caps none">8</span>
          <span class="caps-shift none">*</span>
        </span>
      </div>
      <div class="key nine">
        <span class="eng">
          <span class="lower">9</span>
          <span class="upper none">&#40;</span>
          <span class="caps none">9</span>
          <span class="caps-shift none">&#40;</span>
        </span>
        <span class="rus none">
          <span class="lower">9</span>
          <span class="upper none">&#40;</span>
          <span class="caps none">9</span>
          <span class="caps-shift none">&#40;</span>
        </span>
      </div>
      <div class="key zero">
        <span class="eng">
          <span class="lower">0</span>
          <span class="upper none">&#41;</span>
          <span class="caps none">0</span>
          <span class="caps-shift none">&#41;</span>
        </span>
        <span class="rus none">
          <span class="lower">0</span>
          <span class="upper none">&#41;</span>
          <span class="caps none">0</span>
          <span class="caps-shift none">&#41;</span>
        </span>
      </div>
      <div class="key minus">
        <span class="eng">
          <span class="lower">-</span>
          <span class="upper none">_</span>
          <span class="caps none">-</span>
          <span class="caps-shift none">_</span>
        </span>
        <span class="rus none">
          <span class="lower">-</span>
          <span class="upper none">_</span>
          <span class="caps none">-</span>
          <span class="caps-shift none">_</span>
        </span>
      </div>
      <div class="key equals">
        <span class="eng">
          <span class="lower">=</span>
          <span class="upper none">+</span>
          <span class="caps none">=</span>
          <span class="caps-shift none">+</span>
        </span>
        <span class="rus none">
          <span class="lower">=</span>
          <span class="upper none">+</span>
          <span class="caps none">=</span>
          <span class="caps-shift none">+</span>
        </span>
      </div>
      <div class="key backspace sp">
        <span class="eng">
          <span class="lower">Backspace</span>
          <span class="upper none">Backspace</span>
          <span class="caps none">Backspace</span>
          <span class="caps-shift none">Backspace</span>
        </span>
        <span class="rus none">
          <span class="lower">Backspace</span>
          <span class="upper none">Backspace</span>
          <span class="caps none">Backspace</span>
          <span class="caps-shift none">Backspace</span>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="key tab sp">
        <span class="eng">
          <span class="lower">Tab</span>
          <span class="upper none">Tab</span>
          <span class="caps none">Tab</span>
          <span class="caps-shift none">Tab</span>
        </span>
        <span class="rus none">
          <span class="lower">Tab</span>
          <span class="upper none">Tab</span>
          <span class="caps none">Tab</span>
          <span class="caps-shift none">Tab</span>
        </span>
      </div>
      <div class="key q">
        <span class="eng">
          <span class="lower">q</span>
          <span class="upper none">Q</span>
          <span class="caps none">Q</span>
          <span class="caps-shift none">q</span>
        </span>
        <span class="rus none">
          <span class="lower">й</span>
          <span class="upper none">Й</span>
          <span class="caps none">Й</span>
          <span class="caps-shift none">й</span>
        </span>
      </div>
      <div class="key w">
        <span class="eng">
          <span class="lower">w</span>
          <span class="upper none">W</span>
          <span class="caps none">W</span>
          <span class="caps-shift none">w</span>
        </span>
        <span class="rus none">
          <span class="lower">ц</span>
          <span class="upper none">Ц</span>
          <span class="caps none">Ц</span>
          <span class="caps-shift none">ц</span>
        </span>
      </div>
      <div class="key e">
        <span class="eng">
          <span class="lower">e</span>
          <span class="upper none">E</span>
          <span class="caps none">E</span>
          <span class="caps-shift none">e</span>
        </span>
        <span class="rus none">
          <span class="lower">у</span>
          <span class="upper none">У</span>
          <span class="caps none">У</span>
          <span class="caps-shift none">у</span>
        </span>
      </div>
      <div class="key r">
        <span class="eng">
          <span class="lower">r</span>
          <span class="upper none">R</span>
          <span class="caps none">R</span>
          <span class="caps-shift none">r</span>
        </span>
        <span class="rus none">
          <span class="lower">к</span>
          <span class="upper none">К</span>
          <span class="caps none">К</span>
          <span class="caps-shift none">к</span>
        </span>
      </div>
      <div class="key t">
        <span class="eng">
          <span class="lower">t</span>
          <span class="upper none">T</span>
          <span class="caps none">T</span>
          <span class="caps-shift none">t</span>
        </span>
        <span class="rus none">
          <span class="lower">е</span>
          <span class="upper none">Е</span>
          <span class="caps none">Е</span>
          <span class="caps-shift none">е</span>
        </span>
      </div>
      <div class="key y">
        <span class="eng">
          <span class="lower">y</span>
          <span class="upper none">Y</span>
          <span class="caps none">Y</span>
          <span class="caps-shift none">y</span>
        </span>
        <span class="rus none">
          <span class="lower">н</span>
          <span class="upper none">Н</span>
          <span class="caps none">Н</span>
          <span class="caps-shift none">н</span>
        </span>
      </div>
      <div class="key u">
        <span class="eng">
          <span class="lower">u</span>
          <span class="upper none">U</span>
          <span class="caps none">U</span>
          <span class="caps-shift none">u</span>
        </span>
        <span class="rus none">
          <span class="lower">г</span>
          <span class="upper none">Г</span>
          <span class="caps none">Г</span>
          <span class="caps-shift none">г</span>
        </span>
      </div>
      <div class="key i">
        <span class="eng">
          <span class="lower">i</span>
          <span class="upper none">I</span>
          <span class="caps none">I</span>
          <span class="caps-shift none">i</span>
        </span>
        <span class="rus none">
          <span class="lower">ш</span>
          <span class="upper none">Ш</span>
          <span class="caps none">Ш</span>
          <span class="caps-shift none">ш</span>
        </span>
      </div>
      <div class="key o">
        <span class="eng">
          <span class="lower">o</span>
          <span class="upper none">O</span>
          <span class="caps none">O</span>
          <span class="caps-shift none">o</span>
        </span>
        <span class="rus none">
          <span class="lower">щ</span>
          <span class="upper none">Щ</span>
          <span class="caps none">Щ</span>
          <span class="caps-shift none">щ</span>
        </span>
      </div>
      <div class="key p">
        <span class="eng">
          <span class="lower">p</span>
          <span class="upper none">P</span>
          <span class="caps none">P</span>
          <span class="caps-shift none">p</span>
        </span>
        <span class="rus none">
          <span class="lower">з</span>
          <span class="upper none">З</span>
          <span class="caps none">З</span>
          <span class="caps-shift none">з</span>
        </span>
      </div>
      <div class="key bracket-l">
        <span class="eng">
          <span class="lower">&#91;</span>
          <span class="upper none">&#123;</span>
          <span class="caps none">&#91;</span>
          <span class="caps-shift none">&#123;</span>
        </span>
        <span class="rus none">
          <span class="lower">х</span>
          <span class="upper none">Х</span>
          <span class="caps none">Х</span>
          <span class="caps-shift none">х</span>
        </span>
      </div>
      <div class="key bracket-r">
        <span class="eng">
          <span class="lower">&#93;</span>
          <span class="upper none">&#125;</span>
          <span class="caps none">&#93;</span>
          <span class="caps-shift none">&#125;</span>
        </span>
        <span class="rus none">
          <span class="lower">ъ</span>
          <span class="upper none">Ъ</span>
          <span class="caps none">Ъ</span>
          <span class="caps-shift none">ъ</span>
        </span>
      </div>
      <div class="key backslash">
        <span class="eng">
          <span class="lower">&#92;</span>
          <span class="upper none">&#124;</span>
          <span class="caps none">&#92;</span>
          <span class="caps-shift none">&#124;</span>
        </span>
        <span class="rus none">
          <span class="lower">&#92;</span>
          <span class="upper none">&#47;</span>
          <span class="caps none">&#92;</span>
          <span class="caps-shift none">&#47;</span>
        </span>
      </div>
      <div class="key del sp">
        <span class="eng">
          <span class="lower">Del</span>
          <span class="upper none">Del</span>
          <span class="caps none">Del</span>
          <span class="caps-shift none">Del</span>
        </span>
        <span class="rus none">
          <span class="lower">Del</span>
          <span class="upper none">Del</span>
          <span class="caps none">Del</span>
          <span class="caps-shift none">Del</span>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="key capslock sp">
        <span class="eng">
          <span class="lower">Caps<br>Lock</span>
          <span class="upper none">Caps<br>Lock</span>
          <span class="caps none">Caps<br>Lock</span>
          <span class="caps-shift none">Caps<br>Lock</span>
        </span>
        <span class="rus none">
          <span class="lower">Caps<br>Lock</span>
          <span class="upper none">Caps<br>Lock</span>
          <span class="caps none">Caps<br>Lock</span>
          <span class="caps-shift none">Caps<br>Lock</span>
        </span>
      </div>
      <div class="key a">
        <span class="eng">
          <span class="lower">a</span>
          <span class="upper none">A</span>
          <span class="caps none">A</span>
          <span class="caps-shift none">a</span>
        </span>
        <span class="rus none">
          <span class="lower">ф</span>
          <span class="upper none">Ф</span>
          <span class="caps none">Ф</span>
          <span class="caps-shift none">ф</span>
        </span>
      </div>
      <div class="key s">
        <span class="eng">
          <span class="lower">s</span>
          <span class="upper none">S</span>
          <span class="caps none">S</span>
          <span class="caps-shift none">s</span>
        </span>
        <span class="rus none">
          <span class="lower">ы</span>
          <span class="upper none">Ы</span>
          <span class="caps none">Ы</span>
          <span class="caps-shift none">ы</span>
        </span>
      </div>
      <div class="key d">
        <span class="eng">
          <span class="lower">d</span>
          <span class="upper none">D</span>
          <span class="caps none">D</span>
          <span class="caps-shift none">d</span>
        </span>
        <span class="rus none">
          <span class="lower">в</span>
          <span class="upper none">В</span>
          <span class="caps none">В</span>
          <span class="caps-shift none">в</span>
        </span>
      </div>
      <div class="key f">
        <span class="eng">
          <span class="lower">f</span>
          <span class="upper none">F</span>
          <span class="caps none">F</span>
          <span class="caps-shift none">f</span>
        </span>
        <span class="rus none">
          <span class="lower">а</span>
          <span class="upper none">А</span>
          <span class="caps none">А</span>
          <span class="caps-shift none">а</span>
        </span>
      </div>
      <div class="key g">
        <span class="eng">
          <span class="lower">g</span>
          <span class="upper none">G</span>
          <span class="caps none">G</span>
          <span class="caps-shift none">g</span>
        </span>
        <span class="rus none">
          <span class="lower">п</span>
          <span class="upper none">П</span>
          <span class="caps none">П</span>
          <span class="caps-shift none">п</span>
        </span>
      </div>
      <div class="key h">
        <span class="eng">
          <span class="lower">h</span>
          <span class="upper none">H</span>
          <span class="caps none">H</span>
          <span class="caps-shift none">h</span>
        </span>
        <span class="rus none">
          <span class="lower">р</span>
          <span class="upper none">Р</span>
          <span class="caps none">Р</span>
          <span class="caps-shift none">р</span>
        </span>
      </div>
      <div class="key j">
        <span class="eng">
          <span class="lower">j</span>
          <span class="upper none">J</span>
          <span class="caps none">J</span>
          <span class="caps-shift none">j</span>
        </span>
        <span class="rus none">
          <span class="lower">о</span>
          <span class="upper none">О</span>
          <span class="caps none">О</span>
          <span class="caps-shift none">о</span>
        </span>
      </div>
      <div class="key k">
        <span class="eng">
          <span class="lower">k</span>
          <span class="upper none">K</span>
          <span class="caps none">K</span>
          <span class="caps-shift none">k</span>
        </span>
        <span class="rus none">
          <span class="lower">л</span>
          <span class="upper none">Л</span>
          <span class="caps none">Л</span>
          <span class="caps-shift none">л</span>
        </span>
      </div>
      <div class="key l">
        <span class="eng">
          <span class="lower">l</span>
          <span class="upper none">L</span>
          <span class="caps none">L</span>
          <span class="caps-shift none">l</span>
        </span>
        <span class="rus none">
          <span class="lower">д</span>
          <span class="upper none">Д</span>
          <span class="caps none">Д</span>
          <span class="caps-shift none">д</span>
        </span>
      </div>
      <div class="key semicolon">
        <span class="eng">
          <span class="lower">;</span>
          <span class="upper none">:</span>
          <span class="caps none">;</span>
          <span class="caps-shift none">:</span>
        </span>
        <span class="rus none">
          <span class="lower">ж</span>
          <span class="upper none">Ж</span>
          <span class="caps none">Ж</span>
          <span class="caps-shift none">ж</span>
        </span>
      </div>
      <div class="key quote">
        <span class="eng">
          <span class="lower">'</span>
          <span class="upper none">"</span>
          <span class="caps none">'</span>
          <span class="caps-shift none">"</span>
        </span>
        <span class="rus none">
          <span class="lower">э</span>
          <span class="upper none">Э</span>
          <span class="caps none">Э</span>
          <span class="caps-shift none">э</span>
        </span>
      </div>
      <div class="key enter sp">
        <span class="eng">
          <span class="lower">Enter</span>
          <span class="upper none">Enter</span>
          <span class="caps none">Enter</span>
          <span class="caps-shift none">Enter</span>
        </span>
        <span class="rus none">
          <span class="lower">Enter</span>
          <span class="upper none">Enter</span>
          <span class="caps none">Enter</span>
          <span class="caps-shift none">Enter</span>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="key shift-l sp">
        <span class="eng">
          <span class="lower">Shift</span>
          <span class="upper none">Shift</span>
          <span class="caps none">Shift</span>
          <span class="caps-shift none">Shift</span>
        </span>
        <span class="rus none">
          <span class="lower">Shift</span>
          <span class="upper none">Shift</span>
          <span class="caps none">Shift</span>
          <span class="caps-shift none">Shift</span>
        </span>
      </div>
      <div class="key z">
        <span class="eng">
          <span class="lower">z</span>
          <span class="upper none">Z</span>
          <span class="caps none">Z</span>
          <span class="caps-shift none">z</span>
        </span>
        <span class="rus none">
          <span class="lower">я</span>
          <span class="upper none">Я</span>
          <span class="caps none">Я</span>
          <span class="caps-shift none">я</span>
        </span>
      </div>
      <div class="key x">
        <span class="eng">
          <span class="lower">x</span>
          <span class="upper none">X</span>
          <span class="caps none">X</span>
          <span class="caps-shift none">x</span>
        </span>
        <span class="rus none">
          <span class="lower">ч</span>
          <span class="upper none">Ч</span>
          <span class="caps none">Ч</span>
          <span class="caps-shift none">ч</span>
        </span>
      </div>
      <div class="key c">
        <span class="eng">
          <span class="lower">c</span>
          <span class="upper none">C</span>
          <span class="caps none">C</span>
          <span class="caps-shift none">c</span>
        </span>
        <span class="rus none">
          <span class="lower">с</span>
          <span class="upper none">С</span>
          <span class="caps none">С</span>
          <span class="caps-shift none">с</span>
        </span>
      </div>
      <div class="key v">
        <span class="eng">
          <span class="lower">v</span>
          <span class="upper none">V</span>
          <span class="caps none">V</span>
          <span class="caps-shift none">v</span>
        </span>
        <span class="rus none">
          <span class="lower">м</span>
          <span class="upper none">М</span>
          <span class="caps none">М</span>
          <span class="caps-shift none">м</span>
        </span>
      </div>
      <div class="key b">
        <span class="eng">
          <span class="lower">b</span>
          <span class="upper none">B</span>
          <span class="caps none">B</span>
          <span class="caps-shift none">b</span>
        </span>
        <span class="rus none">
          <span class="lower">и</span>
          <span class="upper none">И</span>
          <span class="caps none">И</span>
          <span class="caps-shift none">и</span>
        </span>
      </div>
      <div class="key n">
        <span class="eng">
          <span class="lower">n</span>
          <span class="upper none">N</span>
          <span class="caps none">N</span>
          <span class="caps-shift none">n</span>
        </span>
        <span class="rus none">
          <span class="lower">т</span>
          <span class="upper none">Т</span>
          <span class="caps none">Т</span>
          <span class="caps-shift none">т</span>
        </span>
      </div>
      <div class="key m">
        <span class="eng">
          <span class="lower">m</span>
          <span class="upper none">M</span>
          <span class="caps none">M</span>
          <span class="caps-shift none">m</span>
        </span>
        <span class="rus none">
          <span class="lower">ь</span>
          <span class="upper none">Ь</span>
          <span class="caps none">Ь</span>
          <span class="caps-shift none">ь</span>
        </span>
      </div>
      <div class="key comma">
        <span class="eng">
          <span class="lower">,</span>
          <span class="upper none">&#60;</span>
          <span class="caps none">,</span>
          <span class="caps-shift none">&#60;</span>
        </span>
        <span class="rus none">
          <span class="lower">б</span>
          <span class="upper none">Б</span>
          <span class="caps none">Б</span>
          <span class="caps-shift none">б</span>
        </span>
      </div>
      <div class="key dot">
        <span class="eng">
          <span class="lower">.</span>
          <span class="upper none">&#62;</span>
          <span class="caps none">.</span>
          <span class="caps-shift none">&#62;</span>
        </span>
        <span class="rus none">
          <span class="lower">ю</span>
          <span class="upper none">Ю</span>
          <span class="caps none">Ю</span>
          <span class="caps-shift none">ю</span>
        </span>
      </div>
      <div class="key slash">
        <span class="eng">
          <span class="lower">&#47;</span>
          <span class="upper none">?</span>
          <span class="caps none">&#47;</span>
          <span class="caps-shift none">?</span>
        </span>
        <span class="rus none">
          <span class="lower">.</span>
          <span class="upper none">,</span>
          <span class="caps none">.</span>
          <span class="caps-shift none">,</span>
        </span>
      </div>
      <div class="key arrow-up sp">
        <span class="eng">
          <span class="lower">▲</span>
          <span class="upper none">▲</span>
          <span class="caps none">▲</span>
          <span class="caps-shift none">▲</span>
        </span>
        <span class="rus none">
          <span class="lower">▲</span>
          <span class="upper none">▲</span>
          <span class="caps none">▲</span>
          <span class="caps-shift none">▲</span>
        </span>
      </div>
      <div class="key shift-r sp">
        <span class="eng">
          <span class="lower">Shift</span>
          <span class="upper none">Shift</span>
          <span class="caps none">Shift</span>
          <span class="caps-shift none">Shift</span>
        </span>
        <span class="rus none">
          <span class="lower">Shift</span>
          <span class="upper none">Shift</span>
          <span class="caps none">Shift</span>
          <span class="caps-shift none">Shift</span>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="key ctrl-l sp">
        <span class="eng">
          <span class="lower">Ctrl</span>
          <span class="upper none">Ctrl</span>
          <span class="caps none">Ctrl</span>
          <span class="caps-shift none">Ctrl</span>
        </span>
        <span class="rus none">
          <span class="lower">Ctrl</span>
          <span class="upper none">Ctrl</span>
          <span class="caps none">Ctrl</span>
          <span class="caps-shift none">Ctrl</span>
        </span>
      </div>
      <div class="key win sp">
        <span class="eng">
          <span class="lower">Win</span>
          <span class="upper none">Win</span>
          <span class="caps none">Win</span>
          <span class="caps-shift none">Win</span>
        </span>
        <span class="rus none">
          <span class="lower">Win</span>
          <span class="upper none">Win</span>
          <span class="caps none">Win</span>
          <span class="caps-shift none">Win</span>
        </span>
      </div>
      <div class="key alt-l sp">
        <span class="eng">
          <span class="lower">Alt</span>
          <span class="upper none">Alt</span>
          <span class="caps none">Alt</span>
          <span class="caps-shift none">Alt</span>
        </span>
        <span class="rus none">
          <span class="lower">Alt</span>
          <span class="upper none">Alt</span>
          <span class="caps none">Alt</span>
          <span class="caps-shift none">Alt</span>
        </span>
      </div>
      <div class="key space">
        <span class="eng">
          <span class="lower">Space</span>
          <span class="upper none">Space</span>
          <span class="caps none">Space</span>
          <span class="caps-shift none">Space</span>
        </span>
        <span class="rus none">
          <span class="lower">Space</span>
          <span class="upper none">Space</span>
          <span class="caps none">Space</span>
          <span class="caps-shift none">Space</span>
        </span>
      </div>
      <div class="key alt-r sp">
        <span class="eng">
          <span class="lower">Alt</span>
          <span class="upper none">Alt</span>
          <span class="caps none">Alt</span>
          <span class="caps-shift none">Alt</span>
        </span>
        <span class="rus none">
          <span class="lower">Alt</span>
          <span class="upper none">Alt</span>
          <span class="caps none">Alt</span>
          <span class="caps-shift none">Alt</span>
        </span>
      </div>
      <div class="key arrow-left sp">
        <span class="eng">
          <span class="lower">◄</span>
          <span class="upper none">◄</span>
          <span class="caps none">◄</span>
          <span class="caps-shift none">◄</span>
        </span>
        <span class="rus none">
          <span class="lower">◄</span>
          <span class="upper none">◄</span>
          <span class="caps none">◄</span>
          <span class="caps-shift none">◄</span>
        </span>
      </div>
      <div class="key arrow-down sp">
        <span class="eng">
          <span class="lower">▼</span>
          <span class="upper none">▼</span>
          <span class="caps none">▼</span>
          <span class="caps-shift none">▼</span>
        </span>
        <span class="rus none">
          <span class="lower">▼</span>
          <span class="upper none">▼</span>
          <span class="caps none">▼</span>
          <span class="caps-shift none">▼</span>
        </span>
      </div>
      <div class="key arrow-right sp">
        <span class="eng">
          <span class="lower">►</span>
          <span class="upper none">►</span>
          <span class="caps none">►</span>
          <span class="caps-shift none">►</span>
        </span>
        <span class="rus none">
          <span class="lower">►</span>
          <span class="upper none">►</span>
          <span class="caps none">►</span>
          <span class="caps-shift none">►</span>
        </span>
      </div>
      <div class="key ctrl-r sp">
        <span class="eng">
          <span class="lower">Ctrl</span>
          <span class="upper none">Ctrl</span>
          <span class="caps none">Ctrl</span>
          <span class="caps-shift none">Ctrl</span>
        </span>
        <span class="rus none">
          <span class="lower">Ctrl</span>
          <span class="upper none">Ctrl</span>
          <span class="caps none">Ctrl</span>
          <span class="caps-shift none">Ctrl</span>
        </span>
      </div>
    </div>
  </div>
  <p class="desc">
    Virtual keyboard was created in Windows OS.<br>
    Switch keyboard language: Left Ctrl + Left Alt.
  </p>
</div>
`);

document.body.appendChild(myMarkup);
