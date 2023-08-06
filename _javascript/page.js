import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  imgLazy,
  imgPopup,
  initClipboard,
  highlightLines,
  runCpp,
  runJavascript,
  runPython,
  runRust,
  getClapCounts
} from './modules/plugins';

basic();
initSidebar();
initTopbar();
imgLazy();
imgPopup();
initClipboard();
highlightLines();
runCpp();
runJavascript();
runPython();
runRust();
getClapCounts();