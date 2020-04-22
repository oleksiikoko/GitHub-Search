module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/OcticonSvg.tsx":
/*!***********************************!*\
  !*** ./assets/img/OcticonSvg.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/assets/img/OcticonSvg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OcticonSvg = () => __jsx("svg", {
  height: "16",
  width: "16",
  "aria-label": "Search",
  viewBox: "0 0 16 16",
  version: "1.1",
  role: "img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("path", {
  fillRule: "evenodd",
  d: "M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (OcticonSvg);

/***/ }),

/***/ "./assets/img/SearchSvg.tsx":
/*!**********************************!*\
  !*** ./assets/img/SearchSvg.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/assets/img/SearchSvg.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SearchSvg = () => __jsx("svg", {
  height: "16",
  width: "16",
  "aria-label": "Search",
  viewBox: "0 0 16 16",
  version: "1.1",
  role: "img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("path", {
  fillRule: "evenodd",
  d: "M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (SearchSvg);

/***/ }),

/***/ "./assets/laguage.json":
/*!*****************************!*\
  !*** ./assets/laguage.json ***!
  \*****************************/
/*! exports provided: 1C Enterprise, 4D, ABAP, ABNF, AGS Script, AMPL, ANTLR, API Blueprint, APL, ASN.1, ASP, ATS, ActionScript, Ada, Adobe Font Metrics, Agda, Alloy, Alpine Abuild, Altium Designer, AngelScript, Ant Build System, ApacheConf, Apex, Apollo Guidance Computer, AppleScript, Arc, AsciiDoc, AspectJ, Assembly, Asymptote, Augeas, AutoHotkey, AutoIt, Awk, Ballerina, Batchfile, Befunge, BibTeX, Bison, BitBake, Blade, BlitzBasic, BlitzMax, Bluespec, Boo, Brainfuck, Brightscript, C, C#, C++, C-ObjDump, C2hs Haskell, CLIPS, CMake, COBOL, COLLADA, CSON, CSS, CSV, CWeb, Cabal Config, Cap'n Proto, CartoCSS, Ceylon, Chapel, Charity, ChucK, Cirru, Clarion, Clean, Click, Clojure, Closure Templates, Cloud Firestore Security Rules, CoNLL-U, CodeQL, CoffeeScript, ColdFusion, ColdFusion CFC, Common Lisp, Common Workflow Language, Component Pascal, Cool, Coq, Cpp-ObjDump, Creole, Crystal, Csound, Csound Document, Csound Score, Cuda, Cycript, Cython, D, D-ObjDump, DIGITAL Command Language, DM, DNS Zone, DTrace, Darcs Patch, Dart, DataWeave, Dhall, Diff, DirectX 3D File, Dockerfile, Dogescript, Dylan, E, EBNF, ECL, ECLiPSe, EJS, EML, EQ, Eagle, Easybuild, Ecere Projects, EditorConfig, Edje Data Collection, Eiffel, Elixir, Elm, Emacs Lisp, EmberScript, Erlang, F#, F*, FIGlet Font, FLUX, Factor, Fancy, Fantom, Faust, Filebench WML, Filterscript, Formatted, Forth, Fortran, FreeMarker, Frege, G-code, GAML, GAMS, GAP, GCC Machine Description, GDB, GDScript, GLSL, GN, Game Maker Language, Genie, Genshi, Gentoo Ebuild, Gentoo Eclass, Gerber Image, Gettext Catalog, Gherkin, Git Attributes, Git Config, Glyph, Glyph Bitmap Distribution Format, Gnuplot, Go, Golo, Gosu, Grace, Gradle, Grammatical Framework, Graph Modeling Language, GraphQL, Graphviz (DOT), Groovy, Groovy Server Pages, HAProxy, HCL, HLSL, HTML, HTML+Django, HTML+ECR, HTML+EEX, HTML+ERB, HTML+PHP, HTML+Razor, HTTP, HXML, Hack, Haml, Handlebars, Harbour, Haskell, Haxe, HiveQL, HolyC, Hy, HyPhy, IDL, IGOR Pro, INI, IRC log, Idris, Ignore List, Inform 7, Inno Setup, Io, Ioke, Isabelle, Isabelle ROOT, J, JFlex, JSON, JSON with Comments, JSON5, JSONLD, JSONiq, JSX, Jasmin, Java, Java Properties, Java Server Pages, JavaScript, JavaScript+ERB, Jison, Jison Lex, Jolie, Jsonnet, Julia, Jupyter Notebook, KRL, KiCad Layout, KiCad Legacy Layout, KiCad Schematic, Kit, Kotlin, LFE, LLVM, LOLCODE, LSL, LTspice Symbol, LabVIEW, Lasso, Latte, Lean, Less, Lex, LilyPond, Limbo, Linker Script, Linux Kernel Module, Liquid, Literate Agda, Literate CoffeeScript, Literate Haskell, LiveScript, Logos, Logtalk, LookML, LoomScript, Lua, M, M4, M4Sugar, MATLAB, MAXScript, MLIR, MQL4, MQL5, MTML, MUF, Makefile, Mako, Markdown, Marko, Mask, Mathematica, Maven POM, Max, MediaWiki, Mercury, Meson, Metal, Microsoft Developer Studio Project, MiniD, Mirah, Modelica, Modula-2, Modula-3, Module Management System, Monkey, Moocode, MoonScript, Motorola 68K Assembly, Muse, Myghty, NASL, NCL, NL, NPM Config, NSIS, Nearley, Nemerle, NetLinx, NetLinx+ERB, NetLogo, NewLisp, Nextflow, Nginx, Nim, Ninja, Nit, Nix, Nu, NumPy, OCaml, ObjDump, Object Data Instance Notation, ObjectScript, Objective-C, Objective-C++, Objective-J, Odin, Omgrofl, Opa, Opal, Open Policy Agent, OpenCL, OpenEdge ABL, OpenQASM, OpenRC runscript, OpenSCAD, OpenStep Property List, OpenType Feature File, Org, Ox, Oxygene, Oz, P4, PHP, PLSQL, PLpgSQL, POV-Ray SDL, Pan, Papyrus, Parrot, Parrot Assembly, Parrot Internal Representation, Pascal, Pawn, Pep8, Perl, Pic, Pickle, PicoLisp, PigLatin, Pike, PlantUML, Pod, Pod 6, PogoScript, Pony, PostCSS, PostScript, PowerBuilder, PowerShell, Prisma, Processing, Proguard, Prolog, Propeller Spin, Protocol Buffer, Public Key, Pug, Puppet, Pure Data, PureBasic, PureScript, Python, Python console, Python traceback, QML, QMake, Quake, R, RAML, RDoc, REALbasic, REXX, RHTML, RMarkdown, RPC, RPM Spec, RUNOFF, Racket, Ragel, Raku, Rascal, Raw token data, Readline Config, Reason, Rebol, Red, Redcode, Regular Expression, Ren'Py, RenderScript, Rich Text Format, Ring, Riot, RobotFramework, Roff, Roff Manpage, Rouge, Ruby, Rust, SAS, SCSS, SMT, SPARQL, SQF, SQL, SQLPL, SRecode Template, SSH Config, STON, SVG, SWIG, Sage, SaltStack, Sass, Scala, Scaml, Scheme, Scilab, Self, ShaderLab, Shell, ShellSession, Shen, Slash, Slice, Slim, SmPL, Smali, Smalltalk, Smarty, Solidity, SourcePawn, Spline Font Database, Squirrel, Stan, Standard ML, Starlark, Stata, Stylus, SubRip Text, SugarSS, SuperCollider, Svelte, Swift, SystemVerilog, TI Program, TLA, TOML, TSQL, TSX, TXL, Tcl, Tcsh, TeX, Tea, Terra, Texinfo, Text, Textile, Thrift, Turing, Turtle, Twig, Type Language, TypeScript, Unified Parallel C, Unity3D Asset, Unix Assembly, Uno, UnrealScript, UrWeb, V, VBA, VBScript, VCL, VHDL, Vala, Verilog, Vim Snippet, Vim script, Visual Basic .NET, Volt, Vue, Wavefront Material, Wavefront Object, Web Ontology Language, WebAssembly, WebIDL, WebVTT, Wget Config, Windows Registry Entries, Wollok, World of Warcraft Addon Data, X BitMap, X Font Directory Index, X PixMap, X10, XC, XCompose, XML, XML Property List, XPages, XProc, XQuery, XS, XSLT, Xojo, Xtend, YAML, YANG, YARA, YASnippet, Yacc, ZAP, ZIL, Zeek, ZenScript, Zephir, Zig, Zimpl, cURL Config, desktop, dircolors, eC, edn, fish, mIRC Script, mcfunction, mupad, nanorc, nesC, ooc, q, reStructuredText, sed, wdl, wisp, xBase, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"1C Enterprise\":{\"type\":\"programming\",\"color\":\"#814CCC\",\"extensions\":[\".bsl\",\".os\"],\"tm_scope\":\"source.bsl\",\"ace_mode\":\"text\",\"language_id\":0},\"4D\":{\"type\":\"programming\",\"extensions\":[\".4dm\"],\"tm_scope\":\"source.4dm\",\"ace_mode\":\"text\",\"language_id\":577529595},\"ABAP\":{\"type\":\"programming\",\"color\":\"#E8274B\",\"extensions\":[\".abap\"],\"tm_scope\":\"source.abap\",\"ace_mode\":\"abap\",\"language_id\":1},\"ABNF\":{\"type\":\"data\",\"ace_mode\":\"text\",\"extensions\":[\".abnf\"],\"tm_scope\":\"source.abnf\",\"language_id\":429},\"AGS Script\":{\"type\":\"programming\",\"color\":\"#B9D9FF\",\"aliases\":[\"ags\"],\"extensions\":[\".asc\",\".ash\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":2},\"AMPL\":{\"type\":\"programming\",\"color\":\"#E6EFBB\",\"extensions\":[\".ampl\",\".mod\"],\"tm_scope\":\"source.ampl\",\"ace_mode\":\"text\",\"language_id\":3},\"ANTLR\":{\"type\":\"programming\",\"color\":\"#9DC3FF\",\"extensions\":[\".g4\"],\"tm_scope\":\"source.antlr\",\"ace_mode\":\"text\",\"language_id\":4},\"API Blueprint\":{\"type\":\"markup\",\"color\":\"#2ACCA8\",\"ace_mode\":\"markdown\",\"extensions\":[\".apib\"],\"tm_scope\":\"text.html.markdown.source.gfm.apib\",\"language_id\":5},\"APL\":{\"type\":\"programming\",\"color\":\"#5A8164\",\"extensions\":[\".apl\",\".dyalog\"],\"interpreters\":[\"apl\",\"aplx\",\"dyalog\"],\"tm_scope\":\"source.apl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"apl\",\"codemirror_mime_type\":\"text/apl\",\"language_id\":6},\"ASN.1\":{\"type\":\"data\",\"extensions\":[\".asn\",\".asn1\"],\"tm_scope\":\"source.asn\",\"ace_mode\":\"text\",\"codemirror_mode\":\"asn.1\",\"codemirror_mime_type\":\"text/x-ttcn-asn\",\"language_id\":7},\"ASP\":{\"type\":\"programming\",\"color\":\"#6a40fd\",\"tm_scope\":\"text.html.asp\",\"aliases\":[\"aspx\",\"aspx-vb\"],\"extensions\":[\".asp\",\".asax\",\".ascx\",\".ashx\",\".asmx\",\".aspx\",\".axd\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-aspx\",\"language_id\":8},\"ATS\":{\"type\":\"programming\",\"color\":\"#1ac620\",\"aliases\":[\"ats2\"],\"extensions\":[\".dats\",\".hats\",\".sats\"],\"tm_scope\":\"source.ats\",\"ace_mode\":\"ocaml\",\"language_id\":9},\"ActionScript\":{\"type\":\"programming\",\"tm_scope\":\"source.actionscript.3\",\"color\":\"#882B0F\",\"aliases\":[\"actionscript 3\",\"actionscript3\",\"as3\"],\"extensions\":[\".as\"],\"ace_mode\":\"actionscript\",\"language_id\":10},\"Ada\":{\"type\":\"programming\",\"color\":\"#02f88c\",\"extensions\":[\".adb\",\".ada\",\".ads\"],\"aliases\":[\"ada95\",\"ada2005\"],\"tm_scope\":\"source.ada\",\"ace_mode\":\"ada\",\"language_id\":11},\"Adobe Font Metrics\":{\"type\":\"data\",\"tm_scope\":\"source.afm\",\"extensions\":[\".afm\"],\"aliases\":[\"acfm\",\"adobe composite font metrics\",\"adobe multiple font metrics\",\"amfm\"],\"ace_mode\":\"text\",\"language_id\":147198098},\"Agda\":{\"type\":\"programming\",\"color\":\"#315665\",\"extensions\":[\".agda\"],\"tm_scope\":\"source.agda\",\"ace_mode\":\"text\",\"language_id\":12},\"Alloy\":{\"type\":\"programming\",\"color\":\"#64C800\",\"extensions\":[\".als\"],\"tm_scope\":\"source.alloy\",\"ace_mode\":\"text\",\"language_id\":13},\"Alpine Abuild\":{\"type\":\"programming\",\"group\":\"Shell\",\"aliases\":[\"abuild\",\"apkbuild\"],\"filenames\":[\"APKBUILD\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":14},\"Altium Designer\":{\"type\":\"data\",\"aliases\":[\"altium\"],\"extensions\":[\".OutJob\",\".PcbDoc\",\".PrjPCB\",\".SchDoc\"],\"tm_scope\":\"source.ini\",\"ace_mode\":\"ini\",\"language_id\":187772328},\"AngelScript\":{\"type\":\"programming\",\"color\":\"#C7D7DC\",\"extensions\":[\".as\",\".angelscript\"],\"tm_scope\":\"source.angelscript\",\"ace_mode\":\"text\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":389477596},\"Ant Build System\":{\"type\":\"data\",\"tm_scope\":\"text.xml.ant\",\"filenames\":[\"ant.xml\",\"build.xml\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"application/xml\",\"language_id\":15},\"ApacheConf\":{\"type\":\"data\",\"aliases\":[\"aconf\",\"apache\"],\"extensions\":[\".apacheconf\",\".vhost\"],\"filenames\":[\".htaccess\",\"apache2.conf\",\"httpd.conf\"],\"tm_scope\":\"source.apache-config\",\"ace_mode\":\"apache_conf\",\"language_id\":16},\"Apex\":{\"type\":\"programming\",\"extensions\":[\".cls\"],\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"language_id\":17},\"Apollo Guidance Computer\":{\"type\":\"programming\",\"group\":\"Assembly\",\"extensions\":[\".agc\"],\"tm_scope\":\"source.agc\",\"ace_mode\":\"assembly_x86\",\"language_id\":18},\"AppleScript\":{\"type\":\"programming\",\"aliases\":[\"osascript\"],\"extensions\":[\".applescript\",\".scpt\"],\"interpreters\":[\"osascript\"],\"tm_scope\":\"source.applescript\",\"ace_mode\":\"applescript\",\"color\":\"#101F1F\",\"language_id\":19},\"Arc\":{\"type\":\"programming\",\"color\":\"#aa2afe\",\"extensions\":[\".arc\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":20},\"AsciiDoc\":{\"type\":\"prose\",\"ace_mode\":\"asciidoc\",\"wrap\":true,\"extensions\":[\".asciidoc\",\".adoc\",\".asc\"],\"tm_scope\":\"text.html.asciidoc\",\"language_id\":22},\"AspectJ\":{\"type\":\"programming\",\"color\":\"#a957b0\",\"extensions\":[\".aj\"],\"tm_scope\":\"source.aspectj\",\"ace_mode\":\"text\",\"language_id\":23},\"Assembly\":{\"type\":\"programming\",\"color\":\"#6E4C13\",\"aliases\":[\"asm\",\"nasm\"],\"extensions\":[\".asm\",\".a51\",\".i\",\".inc\",\".nasm\"],\"tm_scope\":\"source.assembly\",\"ace_mode\":\"assembly_x86\",\"language_id\":24},\"Asymptote\":{\"type\":\"programming\",\"color\":\"#4a0c0c\",\"extensions\":[\".asy\"],\"interpreters\":[\"asy\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-kotlin\",\"language_id\":591605007},\"Augeas\":{\"type\":\"programming\",\"extensions\":[\".aug\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":25},\"AutoHotkey\":{\"type\":\"programming\",\"color\":\"#6594b9\",\"aliases\":[\"ahk\"],\"extensions\":[\".ahk\",\".ahkl\"],\"tm_scope\":\"source.ahk\",\"ace_mode\":\"autohotkey\",\"language_id\":26},\"AutoIt\":{\"type\":\"programming\",\"color\":\"#1C3552\",\"aliases\":[\"au3\",\"AutoIt3\",\"AutoItScript\"],\"extensions\":[\".au3\"],\"tm_scope\":\"source.autoit\",\"ace_mode\":\"autohotkey\",\"language_id\":27},\"Awk\":{\"type\":\"programming\",\"extensions\":[\".awk\",\".auk\",\".gawk\",\".mawk\",\".nawk\"],\"interpreters\":[\"awk\",\"gawk\",\"mawk\",\"nawk\"],\"tm_scope\":\"source.awk\",\"ace_mode\":\"text\",\"language_id\":28},\"Ballerina\":{\"type\":\"programming\",\"extensions\":[\".bal\"],\"tm_scope\":\"source.ballerina\",\"ace_mode\":\"text\",\"color\":\"#FF5000\",\"language_id\":720859680},\"Batchfile\":{\"type\":\"programming\",\"aliases\":[\"bat\",\"batch\",\"dosbatch\",\"winbatch\"],\"extensions\":[\".bat\",\".cmd\"],\"tm_scope\":\"source.batchfile\",\"ace_mode\":\"batchfile\",\"color\":\"#C1F12E\",\"language_id\":29},\"Befunge\":{\"type\":\"programming\",\"extensions\":[\".befunge\"],\"tm_scope\":\"source.befunge\",\"ace_mode\":\"text\",\"language_id\":30},\"BibTeX\":{\"type\":\"markup\",\"group\":\"TeX\",\"extensions\":[\".bib\",\".bibtex\"],\"tm_scope\":\"text.bibtex\",\"ace_mode\":\"tex\",\"codemirror_mode\":\"stex\",\"codemirror_mime_type\":\"text/x-stex\",\"language_id\":982188347},\"Bison\":{\"type\":\"programming\",\"group\":\"Yacc\",\"tm_scope\":\"source.yacc\",\"extensions\":[\".bison\"],\"ace_mode\":\"text\",\"language_id\":31},\"BitBake\":{\"type\":\"programming\",\"tm_scope\":\"none\",\"extensions\":[\".bb\"],\"ace_mode\":\"text\",\"language_id\":32},\"Blade\":{\"type\":\"markup\",\"group\":\"HTML\",\"extensions\":[\".blade\",\".blade.php\"],\"tm_scope\":\"text.html.php.blade\",\"ace_mode\":\"text\",\"language_id\":33},\"BlitzBasic\":{\"type\":\"programming\",\"aliases\":[\"b3d\",\"blitz3d\",\"blitzplus\",\"bplus\"],\"extensions\":[\".bb\",\".decls\"],\"tm_scope\":\"source.blitzmax\",\"ace_mode\":\"text\",\"language_id\":34},\"BlitzMax\":{\"type\":\"programming\",\"color\":\"#cd6400\",\"extensions\":[\".bmx\"],\"aliases\":[\"bmax\"],\"tm_scope\":\"source.blitzmax\",\"ace_mode\":\"text\",\"language_id\":35},\"Bluespec\":{\"type\":\"programming\",\"extensions\":[\".bsv\"],\"tm_scope\":\"source.bsv\",\"ace_mode\":\"verilog\",\"language_id\":36},\"Boo\":{\"type\":\"programming\",\"color\":\"#d4bec1\",\"extensions\":[\".boo\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.boo\",\"language_id\":37},\"Brainfuck\":{\"type\":\"programming\",\"color\":\"#2F2530\",\"extensions\":[\".b\",\".bf\"],\"tm_scope\":\"source.bf\",\"ace_mode\":\"text\",\"codemirror_mode\":\"brainfuck\",\"codemirror_mime_type\":\"text/x-brainfuck\",\"language_id\":38},\"Brightscript\":{\"type\":\"programming\",\"extensions\":[\".brs\"],\"tm_scope\":\"source.brightscript\",\"ace_mode\":\"text\",\"language_id\":39},\"C\":{\"type\":\"programming\",\"color\":\"#555555\",\"extensions\":[\".c\",\".cats\",\".h\",\".idc\"],\"interpreters\":[\"tcc\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":41},\"C#\":{\"type\":\"programming\",\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"tm_scope\":\"source.cs\",\"color\":\"#178600\",\"aliases\":[\"csharp\"],\"extensions\":[\".cs\",\".cake\",\".csx\"],\"language_id\":42},\"C++\":{\"type\":\"programming\",\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"color\":\"#f34b7d\",\"aliases\":[\"cpp\"],\"extensions\":[\".cpp\",\".c++\",\".cc\",\".cp\",\".cxx\",\".h\",\".h++\",\".hh\",\".hpp\",\".hxx\",\".inc\",\".inl\",\".ino\",\".ipp\",\".re\",\".tcc\",\".tpp\"],\"language_id\":43},\"C-ObjDump\":{\"type\":\"data\",\"extensions\":[\".c-objdump\"],\"tm_scope\":\"objdump.x86asm\",\"ace_mode\":\"assembly_x86\",\"language_id\":44},\"C2hs Haskell\":{\"type\":\"programming\",\"group\":\"Haskell\",\"aliases\":[\"c2hs\"],\"extensions\":[\".chs\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":45},\"CLIPS\":{\"type\":\"programming\",\"extensions\":[\".clp\"],\"tm_scope\":\"source.clips\",\"ace_mode\":\"text\",\"language_id\":46},\"CMake\":{\"type\":\"programming\",\"extensions\":[\".cmake\",\".cmake.in\"],\"filenames\":[\"CMakeLists.txt\"],\"tm_scope\":\"source.cmake\",\"ace_mode\":\"text\",\"codemirror_mode\":\"cmake\",\"codemirror_mime_type\":\"text/x-cmake\",\"language_id\":47},\"COBOL\":{\"type\":\"programming\",\"extensions\":[\".cob\",\".cbl\",\".ccp\",\".cobol\",\".cpy\"],\"tm_scope\":\"source.cobol\",\"ace_mode\":\"cobol\",\"codemirror_mode\":\"cobol\",\"codemirror_mime_type\":\"text/x-cobol\",\"language_id\":48},\"COLLADA\":{\"type\":\"data\",\"extensions\":[\".dae\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":49},\"CSON\":{\"type\":\"data\",\"tm_scope\":\"source.coffee\",\"ace_mode\":\"coffee\",\"codemirror_mode\":\"coffeescript\",\"codemirror_mime_type\":\"text/x-coffeescript\",\"extensions\":[\".cson\"],\"language_id\":424},\"CSS\":{\"type\":\"markup\",\"tm_scope\":\"source.css\",\"ace_mode\":\"css\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/css\",\"color\":\"#563d7c\",\"extensions\":[\".css\"],\"language_id\":50},\"CSV\":{\"type\":\"data\",\"ace_mode\":\"text\",\"tm_scope\":\"none\",\"extensions\":[\".csv\"],\"language_id\":51},\"CWeb\":{\"type\":\"programming\",\"extensions\":[\".w\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":657332628},\"Cabal Config\":{\"type\":\"data\",\"aliases\":[\"Cabal\"],\"extensions\":[\".cabal\"],\"filenames\":[\"cabal.config\",\"cabal.project\"],\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"tm_scope\":\"source.cabal\",\"language_id\":677095381},\"Cap'n Proto\":{\"type\":\"programming\",\"tm_scope\":\"source.capnp\",\"extensions\":[\".capnp\"],\"ace_mode\":\"text\",\"language_id\":52},\"CartoCSS\":{\"type\":\"programming\",\"aliases\":[\"Carto\"],\"extensions\":[\".mss\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.css.mss\",\"language_id\":53},\"Ceylon\":{\"type\":\"programming\",\"color\":\"#dfa535\",\"extensions\":[\".ceylon\"],\"tm_scope\":\"source.ceylon\",\"ace_mode\":\"text\",\"language_id\":54},\"Chapel\":{\"type\":\"programming\",\"color\":\"#8dc63f\",\"aliases\":[\"chpl\"],\"extensions\":[\".chpl\"],\"tm_scope\":\"source.chapel\",\"ace_mode\":\"text\",\"language_id\":55},\"Charity\":{\"type\":\"programming\",\"extensions\":[\".ch\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":56},\"ChucK\":{\"type\":\"programming\",\"extensions\":[\".ck\"],\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"language_id\":57},\"Cirru\":{\"type\":\"programming\",\"color\":\"#ccccff\",\"tm_scope\":\"source.cirru\",\"ace_mode\":\"cirru\",\"extensions\":[\".cirru\"],\"language_id\":58},\"Clarion\":{\"type\":\"programming\",\"color\":\"#db901e\",\"ace_mode\":\"text\",\"extensions\":[\".clw\"],\"tm_scope\":\"source.clarion\",\"language_id\":59},\"Clean\":{\"type\":\"programming\",\"color\":\"#3F85AF\",\"extensions\":[\".icl\",\".dcl\"],\"tm_scope\":\"source.clean\",\"ace_mode\":\"text\",\"language_id\":60},\"Click\":{\"type\":\"programming\",\"color\":\"#E4E6F3\",\"extensions\":[\".click\"],\"tm_scope\":\"source.click\",\"ace_mode\":\"text\",\"language_id\":61},\"Clojure\":{\"type\":\"programming\",\"tm_scope\":\"source.clojure\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"color\":\"#db5855\",\"extensions\":[\".clj\",\".boot\",\".cl2\",\".cljc\",\".cljs\",\".cljs.hl\",\".cljscm\",\".cljx\",\".hic\"],\"filenames\":[\"riemann.config\"],\"language_id\":62},\"Closure Templates\":{\"type\":\"markup\",\"group\":\"HTML\",\"ace_mode\":\"soy_template\",\"codemirror_mode\":\"soy\",\"codemirror_mime_type\":\"text/x-soy\",\"aliases\":[\"soy\"],\"extensions\":[\".soy\"],\"tm_scope\":\"text.html.soy\",\"language_id\":357046146},\"Cloud Firestore Security Rules\":{\"type\":\"data\",\"ace_mode\":\"less\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/css\",\"tm_scope\":\"source.firestore\",\"filenames\":[\"firestore.rules\"],\"language_id\":407996372},\"CoNLL-U\":{\"type\":\"data\",\"extensions\":[\".conllu\",\".conll\"],\"tm_scope\":\"text.conllu\",\"ace_mode\":\"text\",\"aliases\":[\"CoNLL\",\"CoNLL-X\"],\"language_id\":421026389},\"CodeQL\":{\"type\":\"programming\",\"extensions\":[\".ql\",\".qll\"],\"tm_scope\":\"source.ql\",\"ace_mode\":\"text\",\"language_id\":424259634,\"aliases\":[\"ql\"]},\"CoffeeScript\":{\"type\":\"programming\",\"tm_scope\":\"source.coffee\",\"ace_mode\":\"coffee\",\"codemirror_mode\":\"coffeescript\",\"codemirror_mime_type\":\"text/x-coffeescript\",\"color\":\"#244776\",\"aliases\":[\"coffee\",\"coffee-script\"],\"extensions\":[\".coffee\",\"._coffee\",\".cake\",\".cjsx\",\".iced\"],\"filenames\":[\"Cakefile\"],\"interpreters\":[\"coffee\"],\"language_id\":63},\"ColdFusion\":{\"type\":\"programming\",\"ace_mode\":\"coldfusion\",\"color\":\"#ed2cd6\",\"aliases\":[\"cfm\",\"cfml\",\"coldfusion html\"],\"extensions\":[\".cfm\",\".cfml\"],\"tm_scope\":\"text.html.cfm\",\"language_id\":64},\"ColdFusion CFC\":{\"type\":\"programming\",\"group\":\"ColdFusion\",\"ace_mode\":\"coldfusion\",\"aliases\":[\"cfc\"],\"extensions\":[\".cfc\"],\"tm_scope\":\"source.cfscript\",\"language_id\":65},\"Common Lisp\":{\"type\":\"programming\",\"tm_scope\":\"source.lisp\",\"color\":\"#3fb68b\",\"aliases\":[\"lisp\"],\"extensions\":[\".lisp\",\".asd\",\".cl\",\".l\",\".lsp\",\".ny\",\".podsl\",\".sexp\"],\"interpreters\":[\"lisp\",\"sbcl\",\"ccl\",\"clisp\",\"ecl\"],\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":66},\"Common Workflow Language\":{\"aliases\":[\"cwl\"],\"type\":\"programming\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"extensions\":[\".cwl\"],\"interpreters\":[\"cwl-runner\"],\"color\":\"#B5314C\",\"tm_scope\":\"source.cwl\",\"language_id\":988547172},\"Component Pascal\":{\"type\":\"programming\",\"color\":\"#B0CE4E\",\"extensions\":[\".cp\",\".cps\"],\"tm_scope\":\"source.pascal\",\"aliases\":[\"delphi\",\"objectpascal\"],\"ace_mode\":\"pascal\",\"codemirror_mode\":\"pascal\",\"codemirror_mime_type\":\"text/x-pascal\",\"language_id\":67},\"Cool\":{\"type\":\"programming\",\"extensions\":[\".cl\"],\"tm_scope\":\"source.cool\",\"ace_mode\":\"text\",\"language_id\":68},\"Coq\":{\"type\":\"programming\",\"extensions\":[\".coq\",\".v\"],\"tm_scope\":\"source.coq\",\"ace_mode\":\"text\",\"language_id\":69},\"Cpp-ObjDump\":{\"type\":\"data\",\"extensions\":[\".cppobjdump\",\".c++-objdump\",\".c++objdump\",\".cpp-objdump\",\".cxx-objdump\"],\"tm_scope\":\"objdump.x86asm\",\"aliases\":[\"c++-objdump\"],\"ace_mode\":\"assembly_x86\",\"language_id\":70},\"Creole\":{\"type\":\"prose\",\"wrap\":true,\"extensions\":[\".creole\"],\"tm_scope\":\"text.html.creole\",\"ace_mode\":\"text\",\"language_id\":71},\"Crystal\":{\"type\":\"programming\",\"color\":\"#000100\",\"extensions\":[\".cr\"],\"ace_mode\":\"ruby\",\"codemirror_mode\":\"crystal\",\"codemirror_mime_type\":\"text/x-crystal\",\"tm_scope\":\"source.crystal\",\"interpreters\":[\"crystal\"],\"language_id\":72},\"Csound\":{\"type\":\"programming\",\"aliases\":[\"csound-orc\"],\"extensions\":[\".orc\",\".udo\"],\"tm_scope\":\"source.csound\",\"ace_mode\":\"csound_orchestra\",\"language_id\":73},\"Csound Document\":{\"type\":\"programming\",\"aliases\":[\"csound-csd\"],\"extensions\":[\".csd\"],\"tm_scope\":\"source.csound-document\",\"ace_mode\":\"csound_document\",\"language_id\":74},\"Csound Score\":{\"type\":\"programming\",\"aliases\":[\"csound-sco\"],\"extensions\":[\".sco\"],\"tm_scope\":\"source.csound-score\",\"ace_mode\":\"csound_score\",\"language_id\":75},\"Cuda\":{\"type\":\"programming\",\"extensions\":[\".cu\",\".cuh\"],\"tm_scope\":\"source.cuda-c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"color\":\"#3A4E3A\",\"language_id\":77},\"Cycript\":{\"type\":\"programming\",\"extensions\":[\".cy\"],\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"language_id\":78},\"Cython\":{\"type\":\"programming\",\"group\":\"Python\",\"extensions\":[\".pyx\",\".pxd\",\".pxi\"],\"aliases\":[\"pyrex\"],\"tm_scope\":\"source.cython\",\"ace_mode\":\"text\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-cython\",\"language_id\":79},\"D\":{\"type\":\"programming\",\"color\":\"#ba595e\",\"extensions\":[\".d\",\".di\"],\"tm_scope\":\"source.d\",\"ace_mode\":\"d\",\"codemirror_mode\":\"d\",\"codemirror_mime_type\":\"text/x-d\",\"language_id\":80},\"D-ObjDump\":{\"type\":\"data\",\"extensions\":[\".d-objdump\"],\"tm_scope\":\"objdump.x86asm\",\"ace_mode\":\"assembly_x86\",\"language_id\":81},\"DIGITAL Command Language\":{\"type\":\"programming\",\"aliases\":[\"dcl\"],\"extensions\":[\".com\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":82},\"DM\":{\"type\":\"programming\",\"color\":\"#447265\",\"extensions\":[\".dm\"],\"aliases\":[\"byond\"],\"tm_scope\":\"source.dm\",\"ace_mode\":\"c_cpp\",\"language_id\":83},\"DNS Zone\":{\"type\":\"data\",\"extensions\":[\".zone\",\".arpa\"],\"tm_scope\":\"text.zone_file\",\"ace_mode\":\"text\",\"language_id\":84},\"DTrace\":{\"type\":\"programming\",\"aliases\":[\"dtrace-script\"],\"extensions\":[\".d\"],\"interpreters\":[\"dtrace\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":85},\"Darcs Patch\":{\"type\":\"data\",\"aliases\":[\"dpatch\"],\"extensions\":[\".darcspatch\",\".dpatch\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":86},\"Dart\":{\"type\":\"programming\",\"color\":\"#00B4AB\",\"extensions\":[\".dart\"],\"interpreters\":[\"dart\"],\"tm_scope\":\"source.dart\",\"ace_mode\":\"dart\",\"codemirror_mode\":\"dart\",\"codemirror_mime_type\":\"application/dart\",\"language_id\":87},\"DataWeave\":{\"type\":\"programming\",\"color\":\"#003a52\",\"extensions\":[\".dwl\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.data-weave\",\"language_id\":974514097},\"Dhall\":{\"type\":\"programming\",\"color\":\"#dfafff\",\"extensions\":[\".dhall\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":793969321},\"Diff\":{\"type\":\"data\",\"extensions\":[\".diff\",\".patch\"],\"aliases\":[\"udiff\"],\"tm_scope\":\"source.diff\",\"ace_mode\":\"diff\",\"codemirror_mode\":\"diff\",\"codemirror_mime_type\":\"text/x-diff\",\"language_id\":88},\"DirectX 3D File\":{\"type\":\"data\",\"extensions\":[\".x\"],\"ace_mode\":\"text\",\"tm_scope\":\"none\",\"language_id\":201049282},\"Dockerfile\":{\"type\":\"programming\",\"color\":\"#384d54\",\"tm_scope\":\"source.dockerfile\",\"extensions\":[\".dockerfile\"],\"filenames\":[\"Dockerfile\"],\"ace_mode\":\"dockerfile\",\"codemirror_mode\":\"dockerfile\",\"codemirror_mime_type\":\"text/x-dockerfile\",\"language_id\":89},\"Dogescript\":{\"type\":\"programming\",\"color\":\"#cca760\",\"extensions\":[\".djs\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":90},\"Dylan\":{\"type\":\"programming\",\"color\":\"#6c616e\",\"extensions\":[\".dylan\",\".dyl\",\".intr\",\".lid\"],\"tm_scope\":\"source.dylan\",\"ace_mode\":\"text\",\"codemirror_mode\":\"dylan\",\"codemirror_mime_type\":\"text/x-dylan\",\"language_id\":91},\"E\":{\"type\":\"programming\",\"color\":\"#ccce35\",\"extensions\":[\".E\"],\"interpreters\":[\"rune\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":92},\"EBNF\":{\"type\":\"data\",\"extensions\":[\".ebnf\"],\"tm_scope\":\"source.ebnf\",\"ace_mode\":\"text\",\"codemirror_mode\":\"ebnf\",\"codemirror_mime_type\":\"text/x-ebnf\",\"language_id\":430},\"ECL\":{\"type\":\"programming\",\"color\":\"#8a1267\",\"extensions\":[\".ecl\",\".eclxml\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"ecl\",\"codemirror_mime_type\":\"text/x-ecl\",\"language_id\":93},\"ECLiPSe\":{\"type\":\"programming\",\"group\":\"prolog\",\"extensions\":[\".ecl\"],\"tm_scope\":\"source.prolog.eclipse\",\"ace_mode\":\"prolog\",\"language_id\":94},\"EJS\":{\"type\":\"markup\",\"group\":\"HTML\",\"extensions\":[\".ejs\"],\"tm_scope\":\"text.html.js\",\"ace_mode\":\"ejs\",\"language_id\":95},\"EML\":{\"type\":\"data\",\"extensions\":[\".eml\",\".mbox\"],\"tm_scope\":\"text.eml.basic\",\"ace_mode\":\"text\",\"language_id\":529653389},\"EQ\":{\"type\":\"programming\",\"color\":\"#a78649\",\"extensions\":[\".eq\"],\"tm_scope\":\"source.cs\",\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"language_id\":96},\"Eagle\":{\"type\":\"data\",\"extensions\":[\".sch\",\".brd\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":97},\"Easybuild\":{\"type\":\"data\",\"group\":\"Python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"tm_scope\":\"source.python\",\"extensions\":[\".eb\"],\"language_id\":342840477},\"Ecere Projects\":{\"type\":\"data\",\"group\":\"JavaScript\",\"extensions\":[\".epj\"],\"tm_scope\":\"source.json\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":98},\"EditorConfig\":{\"type\":\"data\",\"group\":\"INI\",\"filenames\":[\".editorconfig\"],\"aliases\":[\"editor-config\"],\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"tm_scope\":\"source.editorconfig\",\"language_id\":96139566},\"Edje Data Collection\":{\"type\":\"data\",\"extensions\":[\".edc\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":342840478},\"Eiffel\":{\"type\":\"programming\",\"color\":\"#946d57\",\"extensions\":[\".e\"],\"tm_scope\":\"source.eiffel\",\"ace_mode\":\"eiffel\",\"codemirror_mode\":\"eiffel\",\"codemirror_mime_type\":\"text/x-eiffel\",\"language_id\":99},\"Elixir\":{\"type\":\"programming\",\"color\":\"#6e4a7e\",\"extensions\":[\".ex\",\".exs\"],\"tm_scope\":\"source.elixir\",\"ace_mode\":\"elixir\",\"filenames\":[\"mix.lock\"],\"interpreters\":[\"elixir\"],\"language_id\":100},\"Elm\":{\"type\":\"programming\",\"color\":\"#60B5CC\",\"extensions\":[\".elm\"],\"tm_scope\":\"source.elm\",\"ace_mode\":\"elm\",\"codemirror_mode\":\"elm\",\"codemirror_mime_type\":\"text/x-elm\",\"language_id\":101},\"Emacs Lisp\":{\"type\":\"programming\",\"tm_scope\":\"source.emacs.lisp\",\"color\":\"#c065db\",\"aliases\":[\"elisp\",\"emacs\"],\"filenames\":[\".abbrev_defs\",\".emacs\",\".emacs.desktop\",\".gnus\",\".spacemacs\",\".viper\",\"Cask\",\"Project.ede\",\"_emacs\",\"abbrev_defs\"],\"extensions\":[\".el\",\".emacs\",\".emacs.desktop\"],\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":102},\"EmberScript\":{\"type\":\"programming\",\"color\":\"#FFF4F3\",\"extensions\":[\".em\",\".emberscript\"],\"tm_scope\":\"source.coffee\",\"ace_mode\":\"coffee\",\"codemirror_mode\":\"coffeescript\",\"codemirror_mime_type\":\"text/x-coffeescript\",\"language_id\":103},\"Erlang\":{\"type\":\"programming\",\"color\":\"#B83998\",\"extensions\":[\".erl\",\".app.src\",\".es\",\".escript\",\".hrl\",\".xrl\",\".yrl\"],\"filenames\":[\"Emakefile\",\"rebar.config\",\"rebar.config.lock\",\"rebar.lock\"],\"tm_scope\":\"source.erlang\",\"ace_mode\":\"erlang\",\"codemirror_mode\":\"erlang\",\"codemirror_mime_type\":\"text/x-erlang\",\"interpreters\":[\"escript\"],\"language_id\":104},\"F#\":{\"type\":\"programming\",\"color\":\"#b845fc\",\"aliases\":[\"fsharp\"],\"extensions\":[\".fs\",\".fsi\",\".fsx\"],\"tm_scope\":\"source.fsharp\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-fsharp\",\"language_id\":105},\"F*\":{\"fs_name\":\"Fstar\",\"type\":\"programming\",\"color\":\"#572e30\",\"aliases\":[\"fstar\"],\"extensions\":[\".fst\"],\"tm_scope\":\"source.fstar\",\"ace_mode\":\"text\",\"language_id\":336943375},\"FIGlet Font\":{\"type\":\"data\",\"aliases\":[\"FIGfont\"],\"extensions\":[\".flf\"],\"tm_scope\":\"source.figfont\",\"ace_mode\":\"text\",\"language_id\":686129783},\"FLUX\":{\"type\":\"programming\",\"color\":\"#88ccff\",\"extensions\":[\".fx\",\".flux\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":106},\"Factor\":{\"type\":\"programming\",\"color\":\"#636746\",\"extensions\":[\".factor\"],\"filenames\":[\".factor-boot-rc\",\".factor-rc\"],\"tm_scope\":\"source.factor\",\"ace_mode\":\"text\",\"codemirror_mode\":\"factor\",\"codemirror_mime_type\":\"text/x-factor\",\"language_id\":108},\"Fancy\":{\"type\":\"programming\",\"color\":\"#7b9db4\",\"extensions\":[\".fy\",\".fancypack\"],\"filenames\":[\"Fakefile\"],\"tm_scope\":\"source.fancy\",\"ace_mode\":\"text\",\"language_id\":109},\"Fantom\":{\"type\":\"programming\",\"color\":\"#14253c\",\"extensions\":[\".fan\"],\"tm_scope\":\"source.fan\",\"ace_mode\":\"text\",\"language_id\":110},\"Faust\":{\"type\":\"programming\",\"color\":\"#c37240\",\"extensions\":[\".dsp\"],\"tm_scope\":\"source.faust\",\"ace_mode\":\"text\",\"language_id\":622529198},\"Filebench WML\":{\"type\":\"programming\",\"extensions\":[\".f\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":111},\"Filterscript\":{\"type\":\"programming\",\"group\":\"RenderScript\",\"extensions\":[\".fs\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":112},\"Formatted\":{\"type\":\"data\",\"extensions\":[\".for\",\".eam.fs\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":113},\"Forth\":{\"type\":\"programming\",\"color\":\"#341708\",\"extensions\":[\".fth\",\".4th\",\".f\",\".for\",\".forth\",\".fr\",\".frt\",\".fs\"],\"tm_scope\":\"source.forth\",\"ace_mode\":\"forth\",\"codemirror_mode\":\"forth\",\"codemirror_mime_type\":\"text/x-forth\",\"language_id\":114},\"Fortran\":{\"type\":\"programming\",\"color\":\"#4d41b1\",\"extensions\":[\".f90\",\".f\",\".f03\",\".f08\",\".f77\",\".f95\",\".for\",\".fpp\"],\"tm_scope\":\"source.fortran\",\"ace_mode\":\"text\",\"codemirror_mode\":\"fortran\",\"codemirror_mime_type\":\"text/x-fortran\",\"language_id\":107},\"FreeMarker\":{\"type\":\"programming\",\"color\":\"#0050b2\",\"aliases\":[\"ftl\"],\"extensions\":[\".ftl\"],\"tm_scope\":\"text.html.ftl\",\"ace_mode\":\"ftl\",\"language_id\":115},\"Frege\":{\"type\":\"programming\",\"color\":\"#00cafe\",\"extensions\":[\".fr\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"language_id\":116},\"G-code\":{\"type\":\"programming\",\"color\":\"#D08CF2\",\"extensions\":[\".g\",\".cnc\",\".gco\",\".gcode\"],\"tm_scope\":\"source.gcode\",\"ace_mode\":\"gcode\",\"language_id\":117},\"GAML\":{\"type\":\"programming\",\"color\":\"#FFC766\",\"extensions\":[\".gaml\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":290345951},\"GAMS\":{\"type\":\"programming\",\"extensions\":[\".gms\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":118},\"GAP\":{\"type\":\"programming\",\"extensions\":[\".g\",\".gap\",\".gd\",\".gi\",\".tst\"],\"tm_scope\":\"source.gap\",\"ace_mode\":\"text\",\"language_id\":119},\"GCC Machine Description\":{\"type\":\"programming\",\"extensions\":[\".md\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":121},\"GDB\":{\"type\":\"programming\",\"extensions\":[\".gdb\",\".gdbinit\"],\"tm_scope\":\"source.gdb\",\"ace_mode\":\"text\",\"language_id\":122},\"GDScript\":{\"type\":\"programming\",\"color\":\"#355570\",\"extensions\":[\".gd\"],\"tm_scope\":\"source.gdscript\",\"ace_mode\":\"text\",\"language_id\":123},\"GLSL\":{\"type\":\"programming\",\"extensions\":[\".glsl\",\".fp\",\".frag\",\".frg\",\".fs\",\".fsh\",\".fshader\",\".geo\",\".geom\",\".glslf\",\".glslv\",\".gs\",\".gshader\",\".shader\",\".tesc\",\".tese\",\".vert\",\".vrx\",\".vsh\",\".vshader\"],\"tm_scope\":\"source.glsl\",\"ace_mode\":\"glsl\",\"language_id\":124},\"GN\":{\"type\":\"data\",\"extensions\":[\".gn\",\".gni\"],\"interpreters\":[\"gn\"],\"filenames\":[\".gn\"],\"tm_scope\":\"source.gn\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":302957008},\"Game Maker Language\":{\"type\":\"programming\",\"color\":\"#71b417\",\"extensions\":[\".gml\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":125},\"Genie\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".gs\"],\"color\":\"#fb855d\",\"tm_scope\":\"none\",\"language_id\":792408528},\"Genshi\":{\"type\":\"programming\",\"extensions\":[\".kid\"],\"tm_scope\":\"text.xml.genshi\",\"aliases\":[\"xml+genshi\",\"xml+kid\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":126},\"Gentoo Ebuild\":{\"type\":\"programming\",\"group\":\"Shell\",\"extensions\":[\".ebuild\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":127},\"Gentoo Eclass\":{\"type\":\"programming\",\"group\":\"Shell\",\"extensions\":[\".eclass\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":128},\"Gerber Image\":{\"type\":\"data\",\"aliases\":[\"rs-274x\"],\"extensions\":[\".gbr\",\".gbl\",\".gbo\",\".gbp\",\".gbs\",\".gko\",\".gml\",\".gpb\",\".gpt\",\".gtl\",\".gto\",\".gtp\",\".gts\"],\"interpreters\":[\"gerbv\",\"gerbview\"],\"tm_scope\":\"source.gerber\",\"ace_mode\":\"text\",\"language_id\":404627610},\"Gettext Catalog\":{\"type\":\"prose\",\"searchable\":false,\"aliases\":[\"pot\"],\"extensions\":[\".po\",\".pot\"],\"tm_scope\":\"source.po\",\"ace_mode\":\"text\",\"language_id\":129},\"Gherkin\":{\"type\":\"programming\",\"extensions\":[\".feature\"],\"tm_scope\":\"text.gherkin.feature\",\"aliases\":[\"cucumber\"],\"ace_mode\":\"text\",\"color\":\"#5B2063\",\"language_id\":76},\"Git Attributes\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"gitattributes\"],\"filenames\":[\".gitattributes\"],\"tm_scope\":\"source.gitattributes\",\"ace_mode\":\"gitignore\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":956324166},\"Git Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"gitconfig\",\"gitmodules\"],\"extensions\":[\".gitconfig\"],\"filenames\":[\".gitconfig\",\".gitmodules\"],\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"tm_scope\":\"source.gitconfig\",\"language_id\":807968997},\"Glyph\":{\"type\":\"programming\",\"color\":\"#c1ac7f\",\"extensions\":[\".glf\"],\"tm_scope\":\"source.tcl\",\"ace_mode\":\"tcl\",\"codemirror_mode\":\"tcl\",\"codemirror_mime_type\":\"text/x-tcl\",\"language_id\":130},\"Glyph Bitmap Distribution Format\":{\"type\":\"data\",\"extensions\":[\".bdf\"],\"tm_scope\":\"source.bdf\",\"ace_mode\":\"text\",\"language_id\":997665271},\"Gnuplot\":{\"type\":\"programming\",\"color\":\"#f0a9f0\",\"extensions\":[\".gp\",\".gnu\",\".gnuplot\",\".p\",\".plot\",\".plt\"],\"interpreters\":[\"gnuplot\"],\"tm_scope\":\"source.gnuplot\",\"ace_mode\":\"text\",\"language_id\":131},\"Go\":{\"type\":\"programming\",\"color\":\"#00ADD8\",\"aliases\":[\"golang\"],\"extensions\":[\".go\"],\"tm_scope\":\"source.go\",\"ace_mode\":\"golang\",\"codemirror_mode\":\"go\",\"codemirror_mime_type\":\"text/x-go\",\"language_id\":132},\"Golo\":{\"type\":\"programming\",\"color\":\"#88562A\",\"extensions\":[\".golo\"],\"tm_scope\":\"source.golo\",\"ace_mode\":\"text\",\"language_id\":133},\"Gosu\":{\"type\":\"programming\",\"color\":\"#82937f\",\"extensions\":[\".gs\",\".gst\",\".gsx\",\".vark\"],\"tm_scope\":\"source.gosu.2\",\"ace_mode\":\"text\",\"language_id\":134},\"Grace\":{\"type\":\"programming\",\"extensions\":[\".grace\"],\"tm_scope\":\"source.grace\",\"ace_mode\":\"text\",\"language_id\":135},\"Gradle\":{\"type\":\"data\",\"extensions\":[\".gradle\"],\"tm_scope\":\"source.groovy.gradle\",\"ace_mode\":\"text\",\"language_id\":136},\"Grammatical Framework\":{\"type\":\"programming\",\"aliases\":[\"gf\"],\"extensions\":[\".gf\"],\"color\":\"#79aa7a\",\"tm_scope\":\"source.gf\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":137},\"Graph Modeling Language\":{\"type\":\"data\",\"extensions\":[\".gml\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":138},\"GraphQL\":{\"type\":\"data\",\"extensions\":[\".graphql\",\".gql\",\".graphqls\"],\"tm_scope\":\"source.graphql\",\"ace_mode\":\"text\",\"language_id\":139},\"Graphviz (DOT)\":{\"type\":\"data\",\"tm_scope\":\"source.dot\",\"extensions\":[\".dot\",\".gv\"],\"ace_mode\":\"text\",\"language_id\":140},\"Groovy\":{\"type\":\"programming\",\"tm_scope\":\"source.groovy\",\"ace_mode\":\"groovy\",\"codemirror_mode\":\"groovy\",\"codemirror_mime_type\":\"text/x-groovy\",\"color\":\"#e69f56\",\"extensions\":[\".groovy\",\".grt\",\".gtpl\",\".gvy\"],\"interpreters\":[\"groovy\"],\"filenames\":[\"Jenkinsfile\"],\"language_id\":142},\"Groovy Server Pages\":{\"type\":\"programming\",\"group\":\"Groovy\",\"aliases\":[\"gsp\",\"java server page\"],\"extensions\":[\".gsp\"],\"tm_scope\":\"text.html.jsp\",\"ace_mode\":\"jsp\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-jsp\",\"language_id\":143},\"HAProxy\":{\"type\":\"data\",\"extensions\":[\".cfg\"],\"filenames\":[\"haproxy.cfg\"],\"tm_scope\":\"source.haproxy-config\",\"ace_mode\":\"text\",\"language_id\":366607477},\"HCL\":{\"type\":\"programming\",\"extensions\":[\".hcl\",\".tf\",\".tfvars\",\".workflow\"],\"aliases\":[\"terraform\"],\"ace_mode\":\"ruby\",\"codemirror_mode\":\"ruby\",\"codemirror_mime_type\":\"text/x-ruby\",\"tm_scope\":\"source.terraform\",\"language_id\":144},\"HLSL\":{\"type\":\"programming\",\"extensions\":[\".hlsl\",\".cginc\",\".fx\",\".fxh\",\".hlsli\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.hlsl\",\"language_id\":145},\"HTML\":{\"type\":\"markup\",\"tm_scope\":\"text.html.basic\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"color\":\"#e34c26\",\"aliases\":[\"xhtml\"],\"extensions\":[\".html\",\".htm\",\".html.hl\",\".inc\",\".st\",\".xht\",\".xhtml\"],\"language_id\":146},\"HTML+Django\":{\"type\":\"markup\",\"tm_scope\":\"text.html.django\",\"group\":\"HTML\",\"extensions\":[\".jinja\",\".jinja2\",\".mustache\",\".njk\"],\"aliases\":[\"django\",\"html+django/jinja\",\"html+jinja\",\"htmldjango\",\"njk\",\"nunjucks\"],\"ace_mode\":\"django\",\"codemirror_mode\":\"django\",\"codemirror_mime_type\":\"text/x-django\",\"language_id\":147},\"HTML+ECR\":{\"type\":\"markup\",\"tm_scope\":\"text.html.ecr\",\"group\":\"HTML\",\"aliases\":[\"ecr\"],\"extensions\":[\".ecr\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":148},\"HTML+EEX\":{\"type\":\"markup\",\"tm_scope\":\"text.html.elixir\",\"group\":\"HTML\",\"aliases\":[\"eex\"],\"extensions\":[\".eex\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":149},\"HTML+ERB\":{\"type\":\"markup\",\"tm_scope\":\"text.html.erb\",\"group\":\"HTML\",\"aliases\":[\"erb\"],\"extensions\":[\".erb\",\".erb.deface\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-erb\",\"language_id\":150},\"HTML+PHP\":{\"type\":\"markup\",\"tm_scope\":\"text.html.php\",\"group\":\"HTML\",\"extensions\":[\".phtml\"],\"ace_mode\":\"php\",\"codemirror_mode\":\"php\",\"codemirror_mime_type\":\"application/x-httpd-php\",\"language_id\":151},\"HTML+Razor\":{\"type\":\"markup\",\"tm_scope\":\"text.html.cshtml\",\"group\":\"HTML\",\"aliases\":[\"razor\"],\"extensions\":[\".cshtml\",\".razor\"],\"ace_mode\":\"razor\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":479039817},\"HTTP\":{\"type\":\"data\",\"extensions\":[\".http\"],\"tm_scope\":\"source.httpspec\",\"ace_mode\":\"text\",\"codemirror_mode\":\"http\",\"codemirror_mime_type\":\"message/http\",\"language_id\":152},\"HXML\":{\"type\":\"data\",\"ace_mode\":\"text\",\"extensions\":[\".hxml\"],\"tm_scope\":\"source.hxml\",\"language_id\":786683730},\"Hack\":{\"type\":\"programming\",\"ace_mode\":\"php\",\"codemirror_mode\":\"php\",\"codemirror_mime_type\":\"application/x-httpd-php\",\"extensions\":[\".hack\",\".hh\",\".hhi\",\".php\"],\"tm_scope\":\"source.hack\",\"color\":\"#878787\",\"language_id\":153},\"Haml\":{\"group\":\"HTML\",\"type\":\"markup\",\"extensions\":[\".haml\",\".haml.deface\"],\"tm_scope\":\"text.haml\",\"ace_mode\":\"haml\",\"codemirror_mode\":\"haml\",\"codemirror_mime_type\":\"text/x-haml\",\"language_id\":154},\"Handlebars\":{\"type\":\"markup\",\"group\":\"HTML\",\"aliases\":[\"hbs\",\"htmlbars\"],\"extensions\":[\".handlebars\",\".hbs\"],\"tm_scope\":\"text.html.handlebars\",\"ace_mode\":\"handlebars\",\"language_id\":155},\"Harbour\":{\"type\":\"programming\",\"color\":\"#0e60e3\",\"extensions\":[\".hb\"],\"tm_scope\":\"source.harbour\",\"ace_mode\":\"text\",\"language_id\":156},\"Haskell\":{\"type\":\"programming\",\"color\":\"#5e5086\",\"extensions\":[\".hs\",\".hs-boot\",\".hsc\"],\"interpreters\":[\"runhaskell\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":157},\"Haxe\":{\"type\":\"programming\",\"ace_mode\":\"haxe\",\"codemirror_mode\":\"haxe\",\"codemirror_mime_type\":\"text/x-haxe\",\"color\":\"#df7900\",\"extensions\":[\".hx\",\".hxsl\"],\"tm_scope\":\"source.hx\",\"language_id\":158},\"HiveQL\":{\"type\":\"programming\",\"extensions\":[\".q\",\".hql\"],\"color\":\"#dce200\",\"tm_scope\":\"source.hql\",\"ace_mode\":\"sql\",\"language_id\":931814087},\"HolyC\":{\"type\":\"programming\",\"color\":\"#ffefaf\",\"extensions\":[\".hc\"],\"tm_scope\":\"source.hc\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":928121743},\"Hy\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#7790B2\",\"extensions\":[\".hy\"],\"interpreters\":[\"hy\"],\"aliases\":[\"hylang\"],\"tm_scope\":\"source.hy\",\"language_id\":159},\"HyPhy\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".bf\"],\"tm_scope\":\"none\",\"language_id\":160},\"IDL\":{\"type\":\"programming\",\"color\":\"#a3522f\",\"extensions\":[\".pro\",\".dlm\"],\"tm_scope\":\"source.idl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"idl\",\"codemirror_mime_type\":\"text/x-idl\",\"language_id\":161},\"IGOR Pro\":{\"type\":\"programming\",\"color\":\"#0000cc\",\"extensions\":[\".ipf\"],\"aliases\":[\"igor\",\"igorpro\"],\"tm_scope\":\"source.igor\",\"ace_mode\":\"text\",\"language_id\":162},\"INI\":{\"type\":\"data\",\"extensions\":[\".ini\",\".cfg\",\".dof\",\".lektorproject\",\".prefs\",\".pro\",\".properties\"],\"filenames\":[\"buildozer.spec\"],\"tm_scope\":\"source.ini\",\"aliases\":[\"dosini\"],\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":163},\"IRC log\":{\"type\":\"data\",\"aliases\":[\"irc\",\"irc logs\"],\"extensions\":[\".irclog\",\".weechatlog\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mirc\",\"codemirror_mime_type\":\"text/mirc\",\"language_id\":164},\"Idris\":{\"type\":\"programming\",\"color\":\"#b30000\",\"extensions\":[\".idr\",\".lidr\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.idris\",\"language_id\":165},\"Ignore List\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"ignore\",\"gitignore\",\"git-ignore\"],\"extensions\":[\".gitignore\"],\"filenames\":[\".atomignore\",\".babelignore\",\".bzrignore\",\".coffeelintignore\",\".cvsignore\",\".dockerignore\",\".eslintignore\",\".gitignore\",\".nodemonignore\",\".npmignore\",\".prettierignore\",\".stylelintignore\",\".vscodeignore\",\"gitignore-global\",\"gitignore_global\"],\"ace_mode\":\"gitignore\",\"tm_scope\":\"source.gitignore\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":74444240},\"Inform 7\":{\"type\":\"programming\",\"wrap\":true,\"extensions\":[\".ni\",\".i7x\"],\"tm_scope\":\"source.inform7\",\"aliases\":[\"i7\",\"inform7\"],\"ace_mode\":\"text\",\"language_id\":166},\"Inno Setup\":{\"type\":\"programming\",\"extensions\":[\".iss\"],\"tm_scope\":\"source.inno\",\"ace_mode\":\"text\",\"language_id\":167},\"Io\":{\"type\":\"programming\",\"color\":\"#a9188d\",\"extensions\":[\".io\"],\"interpreters\":[\"io\"],\"tm_scope\":\"source.io\",\"ace_mode\":\"io\",\"language_id\":168},\"Ioke\":{\"type\":\"programming\",\"color\":\"#078193\",\"extensions\":[\".ik\"],\"interpreters\":[\"ioke\"],\"tm_scope\":\"source.ioke\",\"ace_mode\":\"text\",\"language_id\":169},\"Isabelle\":{\"type\":\"programming\",\"color\":\"#FEFE00\",\"extensions\":[\".thy\"],\"tm_scope\":\"source.isabelle.theory\",\"ace_mode\":\"text\",\"language_id\":170},\"Isabelle ROOT\":{\"type\":\"programming\",\"group\":\"Isabelle\",\"filenames\":[\"ROOT\"],\"tm_scope\":\"source.isabelle.root\",\"ace_mode\":\"text\",\"language_id\":171},\"J\":{\"type\":\"programming\",\"color\":\"#9EEDFF\",\"extensions\":[\".ijs\"],\"interpreters\":[\"jconsole\"],\"tm_scope\":\"source.j\",\"ace_mode\":\"text\",\"language_id\":172},\"JFlex\":{\"type\":\"programming\",\"group\":\"Lex\",\"extensions\":[\".flex\",\".jflex\"],\"tm_scope\":\"source.jflex\",\"ace_mode\":\"text\",\"language_id\":173},\"JSON\":{\"type\":\"data\",\"tm_scope\":\"source.json\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"searchable\":false,\"extensions\":[\".json\",\".avsc\",\".geojson\",\".gltf\",\".har\",\".ice\",\".JSON-tmLanguage\",\".jsonl\",\".mcmeta\",\".tfstate\",\".tfstate.backup\",\".topojson\",\".webapp\",\".webmanifest\",\".yy\",\".yyp\"],\"filenames\":[\".arcconfig\",\".htmlhintrc\",\".tern-config\",\".tern-project\",\".watchmanconfig\",\"composer.lock\",\"mcmod.info\"],\"language_id\":174},\"JSON with Comments\":{\"type\":\"data\",\"group\":\"JSON\",\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"aliases\":[\"jsonc\"],\"extensions\":[\".jsonc\",\".sublime-build\",\".sublime-commands\",\".sublime-completions\",\".sublime-keymap\",\".sublime-macro\",\".sublime-menu\",\".sublime-mousemap\",\".sublime-project\",\".sublime-settings\",\".sublime-theme\",\".sublime-workspace\",\".sublime_metrics\",\".sublime_session\"],\"filenames\":[\".babelrc\",\".eslintrc.json\",\".jscsrc\",\".jshintrc\",\".jslintrc\",\"jsconfig.json\",\"language-configuration.json\",\"tsconfig.json\"],\"language_id\":423},\"JSON5\":{\"type\":\"data\",\"extensions\":[\".json5\"],\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":175},\"JSONLD\":{\"type\":\"data\",\"extensions\":[\".jsonld\"],\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":176},\"JSONiq\":{\"color\":\"#40d47e\",\"type\":\"programming\",\"ace_mode\":\"jsoniq\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"extensions\":[\".jq\"],\"tm_scope\":\"source.jq\",\"language_id\":177},\"JSX\":{\"type\":\"programming\",\"group\":\"JavaScript\",\"extensions\":[\".jsx\"],\"tm_scope\":\"source.js.jsx\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"jsx\",\"codemirror_mime_type\":\"text/jsx\",\"language_id\":178},\"Jasmin\":{\"type\":\"programming\",\"ace_mode\":\"java\",\"extensions\":[\".j\"],\"tm_scope\":\"source.jasmin\",\"language_id\":180},\"Java\":{\"type\":\"programming\",\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"color\":\"#b07219\",\"extensions\":[\".java\"],\"language_id\":181},\"Java Properties\":{\"type\":\"data\",\"extensions\":[\".properties\"],\"tm_scope\":\"source.java-properties\",\"ace_mode\":\"properties\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":519377561},\"Java Server Pages\":{\"type\":\"programming\",\"group\":\"Java\",\"aliases\":[\"jsp\"],\"extensions\":[\".jsp\"],\"tm_scope\":\"text.html.jsp\",\"ace_mode\":\"jsp\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-jsp\",\"language_id\":182},\"JavaScript\":{\"type\":\"programming\",\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"color\":\"#f1e05a\",\"aliases\":[\"js\",\"node\"],\"extensions\":[\".js\",\"._js\",\".bones\",\".cjs\",\".es\",\".es6\",\".frag\",\".gs\",\".jake\",\".jsb\",\".jscad\",\".jsfl\",\".jsm\",\".jss\",\".mjs\",\".njs\",\".pac\",\".sjs\",\".ssjs\",\".xsjs\",\".xsjslib\"],\"filenames\":[\"Jakefile\"],\"interpreters\":[\"chakra\",\"d8\",\"gjs\",\"js\",\"node\",\"qjs\",\"rhino\",\"v8\",\"v8-shell\"],\"language_id\":183},\"JavaScript+ERB\":{\"type\":\"programming\",\"tm_scope\":\"source.js\",\"group\":\"JavaScript\",\"extensions\":[\".js.erb\"],\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/javascript\",\"language_id\":914318960},\"Jison\":{\"type\":\"programming\",\"group\":\"Yacc\",\"extensions\":[\".jison\"],\"tm_scope\":\"source.jison\",\"ace_mode\":\"text\",\"language_id\":284531423},\"Jison Lex\":{\"type\":\"programming\",\"group\":\"Lex\",\"extensions\":[\".jisonlex\"],\"tm_scope\":\"source.jisonlex\",\"ace_mode\":\"text\",\"language_id\":406395330},\"Jolie\":{\"type\":\"programming\",\"extensions\":[\".ol\",\".iol\"],\"interpreters\":[\"jolie\"],\"color\":\"#843179\",\"ace_mode\":\"text\",\"tm_scope\":\"source.jolie\",\"language_id\":998078858},\"Jsonnet\":{\"color\":\"#0064bd\",\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".jsonnet\",\".libsonnet\"],\"tm_scope\":\"source.jsonnet\",\"language_id\":664885656},\"Julia\":{\"type\":\"programming\",\"extensions\":[\".jl\"],\"interpreters\":[\"julia\"],\"color\":\"#a270ba\",\"tm_scope\":\"source.julia\",\"ace_mode\":\"julia\",\"codemirror_mode\":\"julia\",\"codemirror_mime_type\":\"text/x-julia\",\"language_id\":184},\"Jupyter Notebook\":{\"type\":\"markup\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"tm_scope\":\"source.json\",\"color\":\"#DA5B0B\",\"extensions\":[\".ipynb\"],\"filenames\":[\"Notebook\"],\"aliases\":[\"IPython Notebook\"],\"language_id\":185},\"KRL\":{\"type\":\"programming\",\"color\":\"#28430A\",\"extensions\":[\".krl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":186},\"KiCad Layout\":{\"type\":\"data\",\"aliases\":[\"pcbnew\"],\"extensions\":[\".kicad_pcb\",\".kicad_mod\",\".kicad_wks\"],\"filenames\":[\"fp-lib-table\"],\"tm_scope\":\"source.pcb.sexp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":187},\"KiCad Legacy Layout\":{\"type\":\"data\",\"extensions\":[\".brd\"],\"tm_scope\":\"source.pcb.board\",\"ace_mode\":\"text\",\"language_id\":140848857},\"KiCad Schematic\":{\"type\":\"data\",\"aliases\":[\"eeschema schematic\"],\"extensions\":[\".sch\"],\"tm_scope\":\"source.pcb.schematic\",\"ace_mode\":\"text\",\"language_id\":622447435},\"Kit\":{\"type\":\"markup\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"extensions\":[\".kit\"],\"tm_scope\":\"text.html.basic\",\"language_id\":188},\"Kotlin\":{\"type\":\"programming\",\"color\":\"#F18E33\",\"extensions\":[\".kt\",\".ktm\",\".kts\"],\"tm_scope\":\"source.kotlin\",\"ace_mode\":\"text\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-kotlin\",\"language_id\":189},\"LFE\":{\"type\":\"programming\",\"color\":\"#4C3023\",\"extensions\":[\".lfe\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":190},\"LLVM\":{\"type\":\"programming\",\"extensions\":[\".ll\"],\"tm_scope\":\"source.llvm\",\"ace_mode\":\"text\",\"color\":\"#185619\",\"language_id\":191},\"LOLCODE\":{\"type\":\"programming\",\"extensions\":[\".lol\"],\"color\":\"#cc9900\",\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":192},\"LSL\":{\"type\":\"programming\",\"tm_scope\":\"source.lsl\",\"ace_mode\":\"lsl\",\"extensions\":[\".lsl\",\".lslp\"],\"interpreters\":[\"lsl\"],\"color\":\"#3d9970\",\"language_id\":193},\"LTspice Symbol\":{\"type\":\"data\",\"extensions\":[\".asy\"],\"tm_scope\":\"source.ltspice.symbol\",\"ace_mode\":\"text\",\"codemirror_mode\":\"spreadsheet\",\"codemirror_mime_type\":\"text/x-spreadsheet\",\"language_id\":1013566805},\"LabVIEW\":{\"type\":\"programming\",\"extensions\":[\".lvproj\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":194},\"Lasso\":{\"type\":\"programming\",\"color\":\"#999999\",\"extensions\":[\".lasso\",\".las\",\".lasso8\",\".lasso9\"],\"tm_scope\":\"file.lasso\",\"aliases\":[\"lassoscript\"],\"ace_mode\":\"text\",\"language_id\":195},\"Latte\":{\"type\":\"markup\",\"group\":\"HTML\",\"extensions\":[\".latte\"],\"tm_scope\":\"text.html.smarty\",\"ace_mode\":\"smarty\",\"codemirror_mode\":\"smarty\",\"codemirror_mime_type\":\"text/x-smarty\",\"language_id\":196},\"Lean\":{\"type\":\"programming\",\"extensions\":[\".lean\",\".hlean\"],\"tm_scope\":\"source.lean\",\"ace_mode\":\"text\",\"language_id\":197},\"Less\":{\"type\":\"markup\",\"group\":\"CSS\",\"extensions\":[\".less\"],\"tm_scope\":\"source.css.less\",\"ace_mode\":\"less\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/css\",\"language_id\":198},\"Lex\":{\"type\":\"programming\",\"color\":\"#DBCA00\",\"aliases\":[\"flex\"],\"extensions\":[\".l\",\".lex\"],\"tm_scope\":\"source.lex\",\"ace_mode\":\"text\",\"language_id\":199},\"LilyPond\":{\"type\":\"programming\",\"extensions\":[\".ly\",\".ily\"],\"tm_scope\":\"source.lilypond\",\"ace_mode\":\"text\",\"language_id\":200},\"Limbo\":{\"type\":\"programming\",\"extensions\":[\".b\",\".m\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":201},\"Linker Script\":{\"type\":\"data\",\"extensions\":[\".ld\",\".lds\",\".x\"],\"filenames\":[\"ld.script\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":202},\"Linux Kernel Module\":{\"type\":\"data\",\"extensions\":[\".mod\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":203},\"Liquid\":{\"type\":\"markup\",\"extensions\":[\".liquid\"],\"tm_scope\":\"text.html.liquid\",\"ace_mode\":\"liquid\",\"language_id\":204},\"Literate Agda\":{\"type\":\"programming\",\"group\":\"Agda\",\"extensions\":[\".lagda\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":205},\"Literate CoffeeScript\":{\"type\":\"programming\",\"tm_scope\":\"source.litcoffee\",\"group\":\"CoffeeScript\",\"ace_mode\":\"text\",\"wrap\":true,\"aliases\":[\"litcoffee\"],\"extensions\":[\".litcoffee\"],\"language_id\":206},\"Literate Haskell\":{\"type\":\"programming\",\"group\":\"Haskell\",\"aliases\":[\"lhaskell\",\"lhs\"],\"extensions\":[\".lhs\"],\"tm_scope\":\"text.tex.latex.haskell\",\"ace_mode\":\"text\",\"codemirror_mode\":\"haskell-literate\",\"codemirror_mime_type\":\"text/x-literate-haskell\",\"language_id\":207},\"LiveScript\":{\"type\":\"programming\",\"color\":\"#499886\",\"aliases\":[\"live-script\",\"ls\"],\"extensions\":[\".ls\",\"._ls\"],\"filenames\":[\"Slakefile\"],\"tm_scope\":\"source.livescript\",\"ace_mode\":\"livescript\",\"codemirror_mode\":\"livescript\",\"codemirror_mime_type\":\"text/x-livescript\",\"language_id\":208},\"Logos\":{\"type\":\"programming\",\"extensions\":[\".xm\",\".x\",\".xi\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.logos\",\"language_id\":209},\"Logtalk\":{\"type\":\"programming\",\"extensions\":[\".lgt\",\".logtalk\"],\"tm_scope\":\"source.logtalk\",\"ace_mode\":\"text\",\"language_id\":210},\"LookML\":{\"type\":\"programming\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"color\":\"#652B81\",\"extensions\":[\".lookml\",\".model.lkml\",\".view.lkml\"],\"tm_scope\":\"source.yaml\",\"language_id\":211},\"LoomScript\":{\"type\":\"programming\",\"extensions\":[\".ls\"],\"tm_scope\":\"source.loomscript\",\"ace_mode\":\"text\",\"language_id\":212},\"Lua\":{\"type\":\"programming\",\"tm_scope\":\"source.lua\",\"ace_mode\":\"lua\",\"codemirror_mode\":\"lua\",\"codemirror_mime_type\":\"text/x-lua\",\"color\":\"#000080\",\"extensions\":[\".lua\",\".fcgi\",\".nse\",\".p8\",\".pd_lua\",\".rbxs\",\".rockspec\",\".wlua\"],\"filenames\":[\".luacheckrc\"],\"interpreters\":[\"lua\"],\"language_id\":213},\"M\":{\"type\":\"programming\",\"aliases\":[\"mumps\"],\"extensions\":[\".mumps\",\".m\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"mumps\",\"codemirror_mime_type\":\"text/x-mumps\",\"language_id\":214,\"tm_scope\":\"none\"},\"M4\":{\"type\":\"programming\",\"extensions\":[\".m4\"],\"tm_scope\":\"source.m4\",\"ace_mode\":\"text\",\"language_id\":215},\"M4Sugar\":{\"type\":\"programming\",\"group\":\"M4\",\"aliases\":[\"autoconf\"],\"extensions\":[\".m4\"],\"filenames\":[\"configure.ac\"],\"tm_scope\":\"source.m4\",\"ace_mode\":\"text\",\"language_id\":216},\"MATLAB\":{\"type\":\"programming\",\"color\":\"#e16737\",\"aliases\":[\"octave\"],\"extensions\":[\".matlab\",\".m\"],\"tm_scope\":\"source.matlab\",\"ace_mode\":\"matlab\",\"codemirror_mode\":\"octave\",\"codemirror_mime_type\":\"text/x-octave\",\"language_id\":225},\"MAXScript\":{\"type\":\"programming\",\"color\":\"#00a6a6\",\"extensions\":[\".ms\",\".mcr\"],\"tm_scope\":\"source.maxscript\",\"ace_mode\":\"text\",\"language_id\":217},\"MLIR\":{\"type\":\"programming\",\"color\":\"#5EC8DB\",\"extensions\":[\".mlir\"],\"tm_scope\":\"source.mlir\",\"ace_mode\":\"text\",\"language_id\":448253929},\"MQL4\":{\"type\":\"programming\",\"color\":\"#62A8D6\",\"extensions\":[\".mq4\",\".mqh\"],\"tm_scope\":\"source.mql5\",\"ace_mode\":\"c_cpp\",\"language_id\":426},\"MQL5\":{\"type\":\"programming\",\"color\":\"#4A76B8\",\"extensions\":[\".mq5\",\".mqh\"],\"tm_scope\":\"source.mql5\",\"ace_mode\":\"c_cpp\",\"language_id\":427},\"MTML\":{\"type\":\"markup\",\"color\":\"#b7e1f4\",\"extensions\":[\".mtml\"],\"tm_scope\":\"text.html.basic\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":218},\"MUF\":{\"type\":\"programming\",\"group\":\"Forth\",\"extensions\":[\".muf\",\".m\"],\"tm_scope\":\"none\",\"ace_mode\":\"forth\",\"codemirror_mode\":\"forth\",\"codemirror_mime_type\":\"text/x-forth\",\"language_id\":219},\"Makefile\":{\"type\":\"programming\",\"color\":\"#427819\",\"aliases\":[\"bsdmake\",\"make\",\"mf\"],\"extensions\":[\".mak\",\".d\",\".make\",\".mk\",\".mkfile\"],\"filenames\":[\"BSDmakefile\",\"GNUmakefile\",\"Kbuild\",\"Makefile\",\"Makefile.am\",\"Makefile.boot\",\"Makefile.frag\",\"Makefile.in\",\"Makefile.inc\",\"Makefile.wat\",\"makefile\",\"makefile.sco\",\"mkfile\"],\"interpreters\":[\"make\"],\"tm_scope\":\"source.makefile\",\"ace_mode\":\"makefile\",\"codemirror_mode\":\"cmake\",\"codemirror_mime_type\":\"text/x-cmake\",\"language_id\":220},\"Mako\":{\"type\":\"programming\",\"extensions\":[\".mako\",\".mao\"],\"tm_scope\":\"text.html.mako\",\"ace_mode\":\"text\",\"language_id\":221},\"Markdown\":{\"type\":\"prose\",\"aliases\":[\"pandoc\"],\"ace_mode\":\"markdown\",\"codemirror_mode\":\"gfm\",\"codemirror_mime_type\":\"text/x-gfm\",\"wrap\":true,\"extensions\":[\".md\",\".markdown\",\".mdown\",\".mdwn\",\".mdx\",\".mkd\",\".mkdn\",\".mkdown\",\".ronn\",\".workbook\"],\"filenames\":[\"contents.lr\"],\"tm_scope\":\"source.gfm\",\"language_id\":222},\"Marko\":{\"group\":\"HTML\",\"type\":\"markup\",\"tm_scope\":\"text.marko\",\"extensions\":[\".marko\"],\"aliases\":[\"markojs\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":932782397},\"Mask\":{\"type\":\"markup\",\"color\":\"#f97732\",\"ace_mode\":\"mask\",\"extensions\":[\".mask\"],\"tm_scope\":\"source.mask\",\"language_id\":223},\"Mathematica\":{\"type\":\"programming\",\"extensions\":[\".mathematica\",\".cdf\",\".m\",\".ma\",\".mt\",\".nb\",\".nbp\",\".wl\",\".wlt\"],\"aliases\":[\"mma\"],\"tm_scope\":\"source.mathematica\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mathematica\",\"codemirror_mime_type\":\"text/x-mathematica\",\"language_id\":224},\"Maven POM\":{\"type\":\"data\",\"tm_scope\":\"text.xml.pom\",\"filenames\":[\"pom.xml\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":226},\"Max\":{\"type\":\"programming\",\"color\":\"#c4a79c\",\"aliases\":[\"max/msp\",\"maxmsp\"],\"extensions\":[\".maxpat\",\".maxhelp\",\".maxproj\",\".mxt\",\".pat\"],\"tm_scope\":\"source.json\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":227},\"MediaWiki\":{\"type\":\"prose\",\"wrap\":true,\"extensions\":[\".mediawiki\",\".wiki\"],\"tm_scope\":\"text.html.mediawiki\",\"ace_mode\":\"text\",\"language_id\":228},\"Mercury\":{\"type\":\"programming\",\"color\":\"#ff2b2b\",\"ace_mode\":\"prolog\",\"interpreters\":[\"mmi\"],\"extensions\":[\".m\",\".moo\"],\"tm_scope\":\"source.mercury\",\"language_id\":229},\"Meson\":{\"type\":\"programming\",\"color\":\"#007800\",\"filenames\":[\"meson.build\",\"meson_options.txt\"],\"tm_scope\":\"source.meson\",\"ace_mode\":\"text\",\"language_id\":799141244},\"Metal\":{\"type\":\"programming\",\"color\":\"#8f14e9\",\"extensions\":[\".metal\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":230},\"Microsoft Developer Studio Project\":{\"type\":\"data\",\"extensions\":[\".dsp\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":800983837},\"MiniD\":{\"type\":\"programming\",\"searchable\":false,\"extensions\":[\".minid\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":231},\"Mirah\":{\"type\":\"programming\",\"color\":\"#c7a938\",\"extensions\":[\".druby\",\".duby\",\".mirah\"],\"tm_scope\":\"source.ruby\",\"ace_mode\":\"ruby\",\"codemirror_mode\":\"ruby\",\"codemirror_mime_type\":\"text/x-ruby\",\"language_id\":232},\"Modelica\":{\"type\":\"programming\",\"extensions\":[\".mo\"],\"tm_scope\":\"source.modelica\",\"ace_mode\":\"text\",\"codemirror_mode\":\"modelica\",\"codemirror_mime_type\":\"text/x-modelica\",\"language_id\":233},\"Modula-2\":{\"type\":\"programming\",\"extensions\":[\".mod\"],\"tm_scope\":\"source.modula2\",\"ace_mode\":\"text\",\"language_id\":234},\"Modula-3\":{\"type\":\"programming\",\"extensions\":[\".i3\",\".ig\",\".m3\",\".mg\"],\"color\":\"#223388\",\"ace_mode\":\"text\",\"tm_scope\":\"source.modula-3\",\"language_id\":564743864},\"Module Management System\":{\"type\":\"programming\",\"extensions\":[\".mms\",\".mmk\"],\"filenames\":[\"descrip.mmk\",\"descrip.mms\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":235},\"Monkey\":{\"type\":\"programming\",\"extensions\":[\".monkey\",\".monkey2\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.monkey\",\"language_id\":236},\"Moocode\":{\"type\":\"programming\",\"extensions\":[\".moo\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":237},\"MoonScript\":{\"type\":\"programming\",\"extensions\":[\".moon\"],\"interpreters\":[\"moon\"],\"tm_scope\":\"source.moonscript\",\"ace_mode\":\"text\",\"language_id\":238},\"Motorola 68K Assembly\":{\"type\":\"programming\",\"group\":\"Assembly\",\"aliases\":[\"m68k\"],\"extensions\":[\".asm\",\".i\",\".inc\",\".s\",\".x68\"],\"tm_scope\":\"source.m68k\",\"ace_mode\":\"assembly_x86\",\"language_id\":477582706},\"Muse\":{\"type\":\"prose\",\"extensions\":[\".muse\"],\"tm_scope\":\"text.muse\",\"ace_mode\":\"text\",\"wrap\":true,\"language_id\":474864066,\"aliases\":[\"amusewiki\",\"emacs muse\"]},\"Myghty\":{\"type\":\"programming\",\"extensions\":[\".myt\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":239},\"NASL\":{\"type\":\"programming\",\"extensions\":[\".nasl\",\".inc\"],\"tm_scope\":\"source.nasl\",\"ace_mode\":\"text\",\"language_id\":171666519},\"NCL\":{\"type\":\"programming\",\"color\":\"#28431f\",\"extensions\":[\".ncl\"],\"tm_scope\":\"source.ncl\",\"ace_mode\":\"text\",\"language_id\":240},\"NL\":{\"type\":\"data\",\"extensions\":[\".nl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":241},\"NPM Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"npmrc\"],\"filenames\":[\".npmrc\"],\"tm_scope\":\"source.ini.npmrc\",\"ace_mode\":\"text\",\"language_id\":685022663},\"NSIS\":{\"type\":\"programming\",\"extensions\":[\".nsi\",\".nsh\"],\"tm_scope\":\"source.nsis\",\"ace_mode\":\"text\",\"codemirror_mode\":\"nsis\",\"codemirror_mime_type\":\"text/x-nsis\",\"language_id\":242},\"Nearley\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#990000\",\"extensions\":[\".ne\",\".nearley\"],\"tm_scope\":\"source.ne\",\"language_id\":521429430},\"Nemerle\":{\"type\":\"programming\",\"color\":\"#3d3c6e\",\"extensions\":[\".n\"],\"tm_scope\":\"source.nemerle\",\"ace_mode\":\"text\",\"language_id\":243},\"NetLinx\":{\"type\":\"programming\",\"color\":\"#0aa0ff\",\"extensions\":[\".axs\",\".axi\"],\"tm_scope\":\"source.netlinx\",\"ace_mode\":\"text\",\"language_id\":244},\"NetLinx+ERB\":{\"type\":\"programming\",\"color\":\"#747faa\",\"extensions\":[\".axs.erb\",\".axi.erb\"],\"tm_scope\":\"source.netlinx.erb\",\"ace_mode\":\"text\",\"language_id\":245},\"NetLogo\":{\"type\":\"programming\",\"color\":\"#ff6375\",\"extensions\":[\".nlogo\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":246},\"NewLisp\":{\"type\":\"programming\",\"color\":\"#87AED7\",\"extensions\":[\".nl\",\".lisp\",\".lsp\"],\"interpreters\":[\"newlisp\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":247},\"Nextflow\":{\"type\":\"programming\",\"ace_mode\":\"groovy\",\"tm_scope\":\"source.nextflow\",\"color\":\"#3ac486\",\"extensions\":[\".nf\"],\"filenames\":[\"nextflow.config\"],\"interpreters\":[\"nextflow\"],\"language_id\":506780613},\"Nginx\":{\"type\":\"data\",\"extensions\":[\".nginxconf\",\".vhost\"],\"filenames\":[\"nginx.conf\"],\"tm_scope\":\"source.nginx\",\"aliases\":[\"nginx configuration file\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"nginx\",\"codemirror_mime_type\":\"text/x-nginx-conf\",\"language_id\":248},\"Nim\":{\"type\":\"programming\",\"color\":\"#37775b\",\"extensions\":[\".nim\",\".nim.cfg\",\".nimble\",\".nimrod\",\".nims\"],\"filenames\":[\"nim.cfg\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.nim\",\"language_id\":249},\"Ninja\":{\"type\":\"data\",\"tm_scope\":\"source.ninja\",\"extensions\":[\".ninja\"],\"ace_mode\":\"text\",\"language_id\":250},\"Nit\":{\"type\":\"programming\",\"color\":\"#009917\",\"extensions\":[\".nit\"],\"tm_scope\":\"source.nit\",\"ace_mode\":\"text\",\"language_id\":251},\"Nix\":{\"type\":\"programming\",\"color\":\"#7e7eff\",\"extensions\":[\".nix\"],\"aliases\":[\"nixos\"],\"tm_scope\":\"source.nix\",\"ace_mode\":\"nix\",\"language_id\":252},\"Nu\":{\"type\":\"programming\",\"color\":\"#c9df40\",\"aliases\":[\"nush\"],\"extensions\":[\".nu\"],\"filenames\":[\"Nukefile\"],\"tm_scope\":\"source.nu\",\"ace_mode\":\"scheme\",\"codemirror_mode\":\"scheme\",\"codemirror_mime_type\":\"text/x-scheme\",\"interpreters\":[\"nush\"],\"language_id\":253},\"NumPy\":{\"type\":\"programming\",\"group\":\"Python\",\"extensions\":[\".numpy\",\".numpyw\",\".numsc\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":254},\"OCaml\":{\"type\":\"programming\",\"ace_mode\":\"ocaml\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-ocaml\",\"color\":\"#3be133\",\"extensions\":[\".ml\",\".eliom\",\".eliomi\",\".ml4\",\".mli\",\".mll\",\".mly\"],\"interpreters\":[\"ocaml\",\"ocamlrun\",\"ocamlscript\"],\"tm_scope\":\"source.ocaml\",\"language_id\":255},\"ObjDump\":{\"type\":\"data\",\"extensions\":[\".objdump\"],\"tm_scope\":\"objdump.x86asm\",\"ace_mode\":\"assembly_x86\",\"language_id\":256},\"Object Data Instance Notation\":{\"type\":\"data\",\"extensions\":[\".odin\"],\"tm_scope\":\"source.odin-ehr\",\"ace_mode\":\"text\",\"language_id\":985227236},\"ObjectScript\":{\"type\":\"programming\",\"extensions\":[\".cls\"],\"language_id\":202735509,\"tm_scope\":\"source.objectscript\",\"color\":\"#424893\",\"ace_mode\":\"text\"},\"Objective-C\":{\"type\":\"programming\",\"tm_scope\":\"source.objc\",\"color\":\"#438eff\",\"aliases\":[\"obj-c\",\"objc\",\"objectivec\"],\"extensions\":[\".m\",\".h\"],\"ace_mode\":\"objectivec\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-objectivec\",\"language_id\":257},\"Objective-C++\":{\"type\":\"programming\",\"tm_scope\":\"source.objc++\",\"color\":\"#6866fb\",\"aliases\":[\"obj-c++\",\"objc++\",\"objectivec++\"],\"extensions\":[\".mm\"],\"ace_mode\":\"objectivec\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-objectivec\",\"language_id\":258},\"Objective-J\":{\"type\":\"programming\",\"color\":\"#ff0c5a\",\"aliases\":[\"obj-j\",\"objectivej\",\"objj\"],\"extensions\":[\".j\",\".sj\"],\"tm_scope\":\"source.js.objj\",\"ace_mode\":\"text\",\"language_id\":259},\"Odin\":{\"type\":\"programming\",\"color\":\"#60AFFE\",\"aliases\":[\"odinlang\",\"odin-lang\"],\"extensions\":[\".odin\"],\"tm_scope\":\"source.odin\",\"ace_mode\":\"text\",\"language_id\":889244082},\"Omgrofl\":{\"type\":\"programming\",\"extensions\":[\".omgrofl\"],\"color\":\"#cabbff\",\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":260},\"Opa\":{\"type\":\"programming\",\"extensions\":[\".opa\"],\"tm_scope\":\"source.opa\",\"ace_mode\":\"text\",\"language_id\":261},\"Opal\":{\"type\":\"programming\",\"color\":\"#f7ede0\",\"extensions\":[\".opal\"],\"tm_scope\":\"source.opal\",\"ace_mode\":\"text\",\"language_id\":262},\"Open Policy Agent\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".rego\"],\"language_id\":840483232,\"tm_scope\":\"source.rego\"},\"OpenCL\":{\"type\":\"programming\",\"group\":\"C\",\"extensions\":[\".cl\",\".opencl\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":263},\"OpenEdge ABL\":{\"type\":\"programming\",\"aliases\":[\"progress\",\"openedge\",\"abl\"],\"extensions\":[\".p\",\".cls\",\".w\"],\"tm_scope\":\"source.abl\",\"ace_mode\":\"text\",\"language_id\":264},\"OpenQASM\":{\"type\":\"programming\",\"extensions\":[\".qasm\"],\"color\":\"#AA70FF\",\"tm_scope\":\"source.qasm\",\"ace_mode\":\"text\",\"language_id\":153739399},\"OpenRC runscript\":{\"type\":\"programming\",\"group\":\"Shell\",\"aliases\":[\"openrc\"],\"interpreters\":[\"openrc-run\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":265},\"OpenSCAD\":{\"type\":\"programming\",\"extensions\":[\".scad\"],\"tm_scope\":\"source.scad\",\"ace_mode\":\"scad\",\"language_id\":266},\"OpenStep Property List\":{\"type\":\"data\",\"extensions\":[\".plist\"],\"tm_scope\":\"source.plist\",\"ace_mode\":\"text\",\"language_id\":598917541},\"OpenType Feature File\":{\"type\":\"data\",\"aliases\":[\"AFDKO\"],\"extensions\":[\".fea\"],\"tm_scope\":\"source.opentype\",\"ace_mode\":\"text\",\"language_id\":374317347},\"Org\":{\"type\":\"prose\",\"wrap\":true,\"extensions\":[\".org\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":267},\"Ox\":{\"type\":\"programming\",\"extensions\":[\".ox\",\".oxh\",\".oxo\"],\"tm_scope\":\"source.ox\",\"ace_mode\":\"text\",\"language_id\":268},\"Oxygene\":{\"type\":\"programming\",\"color\":\"#cdd0e3\",\"extensions\":[\".oxygene\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":269},\"Oz\":{\"type\":\"programming\",\"color\":\"#fab738\",\"extensions\":[\".oz\"],\"tm_scope\":\"source.oz\",\"ace_mode\":\"text\",\"codemirror_mode\":\"oz\",\"codemirror_mime_type\":\"text/x-oz\",\"language_id\":270},\"P4\":{\"type\":\"programming\",\"color\":\"#7055b5\",\"extensions\":[\".p4\"],\"tm_scope\":\"source.p4\",\"ace_mode\":\"text\",\"language_id\":348895984},\"PHP\":{\"type\":\"programming\",\"tm_scope\":\"text.html.php\",\"ace_mode\":\"php\",\"codemirror_mode\":\"php\",\"codemirror_mime_type\":\"application/x-httpd-php\",\"color\":\"#4F5D95\",\"extensions\":[\".php\",\".aw\",\".ctp\",\".fcgi\",\".inc\",\".php3\",\".php4\",\".php5\",\".phps\",\".phpt\"],\"filenames\":[\".php\",\".php_cs\",\".php_cs.dist\",\"Phakefile\"],\"interpreters\":[\"php\"],\"aliases\":[\"inc\"],\"language_id\":272},\"PLSQL\":{\"type\":\"programming\",\"ace_mode\":\"sql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-plsql\",\"tm_scope\":\"none\",\"color\":\"#dad8d8\",\"extensions\":[\".pls\",\".bdy\",\".ddl\",\".fnc\",\".pck\",\".pkb\",\".pks\",\".plb\",\".plsql\",\".prc\",\".spc\",\".sql\",\".tpb\",\".tps\",\".trg\",\".vw\"],\"language_id\":273},\"PLpgSQL\":{\"type\":\"programming\",\"ace_mode\":\"pgsql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-sql\",\"tm_scope\":\"source.sql\",\"extensions\":[\".pgsql\",\".sql\"],\"language_id\":274},\"POV-Ray SDL\":{\"type\":\"programming\",\"aliases\":[\"pov-ray\",\"povray\"],\"extensions\":[\".pov\",\".inc\"],\"tm_scope\":\"source.pov-ray sdl\",\"ace_mode\":\"text\",\"language_id\":275},\"Pan\":{\"type\":\"programming\",\"color\":\"#cc0000\",\"extensions\":[\".pan\"],\"tm_scope\":\"source.pan\",\"ace_mode\":\"text\",\"language_id\":276},\"Papyrus\":{\"type\":\"programming\",\"color\":\"#6600cc\",\"extensions\":[\".psc\"],\"tm_scope\":\"source.papyrus.skyrim\",\"ace_mode\":\"text\",\"language_id\":277},\"Parrot\":{\"type\":\"programming\",\"color\":\"#f3ca0a\",\"extensions\":[\".parrot\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":278},\"Parrot Assembly\":{\"group\":\"Parrot\",\"type\":\"programming\",\"aliases\":[\"pasm\"],\"extensions\":[\".pasm\"],\"interpreters\":[\"parrot\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":279},\"Parrot Internal Representation\":{\"group\":\"Parrot\",\"tm_scope\":\"source.parrot.pir\",\"type\":\"programming\",\"aliases\":[\"pir\"],\"extensions\":[\".pir\"],\"interpreters\":[\"parrot\"],\"ace_mode\":\"text\",\"language_id\":280},\"Pascal\":{\"type\":\"programming\",\"color\":\"#E3F171\",\"extensions\":[\".pas\",\".dfm\",\".dpr\",\".inc\",\".lpr\",\".pascal\",\".pp\"],\"interpreters\":[\"instantfpc\"],\"tm_scope\":\"source.pascal\",\"ace_mode\":\"pascal\",\"codemirror_mode\":\"pascal\",\"codemirror_mime_type\":\"text/x-pascal\",\"language_id\":281},\"Pawn\":{\"type\":\"programming\",\"color\":\"#dbb284\",\"extensions\":[\".pwn\",\".inc\",\".sma\"],\"tm_scope\":\"source.pawn\",\"ace_mode\":\"text\",\"language_id\":271},\"Pep8\":{\"type\":\"programming\",\"color\":\"#C76F5B\",\"extensions\":[\".pep\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.pep8\",\"language_id\":840372442},\"Perl\":{\"type\":\"programming\",\"tm_scope\":\"source.perl\",\"ace_mode\":\"perl\",\"codemirror_mode\":\"perl\",\"codemirror_mime_type\":\"text/x-perl\",\"color\":\"#0298c3\",\"extensions\":[\".pl\",\".al\",\".cgi\",\".fcgi\",\".perl\",\".ph\",\".plx\",\".pm\",\".psgi\",\".t\"],\"filenames\":[\"Makefile.PL\",\"Rexfile\",\"ack\",\"cpanfile\"],\"interpreters\":[\"cperl\",\"perl\"],\"aliases\":[\"cperl\"],\"language_id\":282},\"Pic\":{\"type\":\"markup\",\"group\":\"Roff\",\"tm_scope\":\"source.pic\",\"extensions\":[\".pic\",\".chem\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"troff\",\"codemirror_mime_type\":\"text/troff\",\"language_id\":425},\"Pickle\":{\"type\":\"data\",\"extensions\":[\".pkl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":284},\"PicoLisp\":{\"type\":\"programming\",\"extensions\":[\".l\"],\"interpreters\":[\"picolisp\",\"pil\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"language_id\":285},\"PigLatin\":{\"type\":\"programming\",\"color\":\"#fcd7de\",\"extensions\":[\".pig\"],\"tm_scope\":\"source.pig_latin\",\"ace_mode\":\"text\",\"language_id\":286},\"Pike\":{\"type\":\"programming\",\"color\":\"#005390\",\"extensions\":[\".pike\",\".pmod\"],\"interpreters\":[\"pike\"],\"tm_scope\":\"source.pike\",\"ace_mode\":\"text\",\"language_id\":287},\"PlantUML\":{\"type\":\"data\",\"extensions\":[\".puml\",\".iuml\",\".plantuml\"],\"tm_scope\":\"source.wsd\",\"ace_mode\":\"text\",\"language_id\":833504686},\"Pod\":{\"type\":\"prose\",\"ace_mode\":\"perl\",\"codemirror_mode\":\"perl\",\"codemirror_mime_type\":\"text/x-perl\",\"wrap\":true,\"extensions\":[\".pod\"],\"interpreters\":[\"perl\"],\"tm_scope\":\"none\",\"language_id\":288},\"Pod 6\":{\"type\":\"prose\",\"ace_mode\":\"perl\",\"tm_scope\":\"source.perl6fe\",\"wrap\":true,\"extensions\":[\".pod\",\".pod6\"],\"interpreters\":[\"perl6\"],\"language_id\":155357471},\"PogoScript\":{\"type\":\"programming\",\"color\":\"#d80074\",\"extensions\":[\".pogo\"],\"tm_scope\":\"source.pogoscript\",\"ace_mode\":\"text\",\"language_id\":289},\"Pony\":{\"type\":\"programming\",\"extensions\":[\".pony\"],\"tm_scope\":\"source.pony\",\"ace_mode\":\"text\",\"language_id\":290},\"PostCSS\":{\"type\":\"markup\",\"tm_scope\":\"source.postcss\",\"group\":\"CSS\",\"extensions\":[\".pcss\",\".postcss\"],\"ace_mode\":\"text\",\"language_id\":262764437},\"PostScript\":{\"type\":\"markup\",\"color\":\"#da291c\",\"extensions\":[\".ps\",\".eps\",\".epsi\",\".pfa\"],\"tm_scope\":\"source.postscript\",\"aliases\":[\"postscr\"],\"ace_mode\":\"text\",\"language_id\":291},\"PowerBuilder\":{\"type\":\"programming\",\"color\":\"#8f0f8d\",\"extensions\":[\".pbt\",\".sra\",\".sru\",\".srw\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":292},\"PowerShell\":{\"type\":\"programming\",\"color\":\"#012456\",\"tm_scope\":\"source.powershell\",\"ace_mode\":\"powershell\",\"codemirror_mode\":\"powershell\",\"codemirror_mime_type\":\"application/x-powershell\",\"aliases\":[\"posh\",\"pwsh\"],\"extensions\":[\".ps1\",\".psd1\",\".psm1\"],\"interpreters\":[\"pwsh\"],\"language_id\":293},\"Prisma\":{\"type\":\"data\",\"extensions\":[\".prisma\"],\"tm_scope\":\"source.prisma\",\"ace_mode\":\"text\",\"language_id\":499933428},\"Processing\":{\"type\":\"programming\",\"color\":\"#0096D8\",\"extensions\":[\".pde\"],\"tm_scope\":\"source.processing\",\"ace_mode\":\"text\",\"language_id\":294},\"Proguard\":{\"type\":\"data\",\"extensions\":[\".pro\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":716513858},\"Prolog\":{\"type\":\"programming\",\"color\":\"#74283c\",\"extensions\":[\".pl\",\".pro\",\".prolog\",\".yap\"],\"interpreters\":[\"swipl\",\"yap\"],\"tm_scope\":\"source.prolog\",\"ace_mode\":\"prolog\",\"language_id\":295},\"Propeller Spin\":{\"type\":\"programming\",\"color\":\"#7fa2a7\",\"extensions\":[\".spin\"],\"tm_scope\":\"source.spin\",\"ace_mode\":\"text\",\"language_id\":296},\"Protocol Buffer\":{\"type\":\"data\",\"aliases\":[\"protobuf\",\"Protocol Buffers\"],\"extensions\":[\".proto\"],\"tm_scope\":\"source.protobuf\",\"ace_mode\":\"protobuf\",\"codemirror_mode\":\"protobuf\",\"codemirror_mime_type\":\"text/x-protobuf\",\"language_id\":297},\"Public Key\":{\"type\":\"data\",\"extensions\":[\".asc\",\".pub\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"asciiarmor\",\"codemirror_mime_type\":\"application/pgp\",\"language_id\":298},\"Pug\":{\"group\":\"HTML\",\"type\":\"markup\",\"extensions\":[\".jade\",\".pug\"],\"tm_scope\":\"text.jade\",\"ace_mode\":\"jade\",\"codemirror_mode\":\"pug\",\"codemirror_mime_type\":\"text/x-pug\",\"language_id\":179},\"Puppet\":{\"type\":\"programming\",\"color\":\"#302B6D\",\"extensions\":[\".pp\"],\"filenames\":[\"Modulefile\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"puppet\",\"codemirror_mime_type\":\"text/x-puppet\",\"tm_scope\":\"source.puppet\",\"language_id\":299},\"Pure Data\":{\"type\":\"data\",\"extensions\":[\".pd\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":300},\"PureBasic\":{\"type\":\"programming\",\"color\":\"#5a6986\",\"extensions\":[\".pb\",\".pbi\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":301},\"PureScript\":{\"type\":\"programming\",\"color\":\"#1D222D\",\"extensions\":[\".purs\"],\"tm_scope\":\"source.purescript\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":302},\"Python\":{\"type\":\"programming\",\"tm_scope\":\"source.python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"color\":\"#3572A5\",\"extensions\":[\".py\",\".cgi\",\".fcgi\",\".gyp\",\".gypi\",\".lmi\",\".py3\",\".pyde\",\".pyi\",\".pyp\",\".pyt\",\".pyw\",\".rpy\",\".smk\",\".spec\",\".tac\",\".wsgi\",\".xpy\"],\"filenames\":[\".gclient\",\"DEPS\",\"SConscript\",\"SConstruct\",\"Snakefile\",\"wscript\"],\"interpreters\":[\"python\",\"python2\",\"python3\"],\"aliases\":[\"python3\",\"rusthon\"],\"language_id\":303},\"Python console\":{\"type\":\"programming\",\"group\":\"Python\",\"searchable\":false,\"aliases\":[\"pycon\"],\"tm_scope\":\"text.python.console\",\"ace_mode\":\"text\",\"language_id\":428},\"Python traceback\":{\"type\":\"data\",\"group\":\"Python\",\"searchable\":false,\"extensions\":[\".pytb\"],\"tm_scope\":\"text.python.traceback\",\"ace_mode\":\"text\",\"language_id\":304},\"QML\":{\"type\":\"programming\",\"color\":\"#44a51c\",\"extensions\":[\".qml\",\".qbs\"],\"tm_scope\":\"source.qml\",\"ace_mode\":\"text\",\"language_id\":305},\"QMake\":{\"type\":\"programming\",\"extensions\":[\".pro\",\".pri\"],\"interpreters\":[\"qmake\"],\"tm_scope\":\"source.qmake\",\"ace_mode\":\"text\",\"language_id\":306},\"Quake\":{\"type\":\"programming\",\"filenames\":[\"m3makefile\",\"m3overrides\"],\"color\":\"#882233\",\"ace_mode\":\"text\",\"tm_scope\":\"source.quake\",\"language_id\":375265331},\"R\":{\"type\":\"programming\",\"color\":\"#198CE7\",\"aliases\":[\"R\",\"Rscript\",\"splus\"],\"extensions\":[\".r\",\".rd\",\".rsx\"],\"filenames\":[\".Rprofile\",\"expr-dist\"],\"interpreters\":[\"Rscript\"],\"tm_scope\":\"source.r\",\"ace_mode\":\"r\",\"codemirror_mode\":\"r\",\"codemirror_mime_type\":\"text/x-rsrc\",\"language_id\":307},\"RAML\":{\"type\":\"markup\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"tm_scope\":\"source.yaml\",\"color\":\"#77d9fb\",\"extensions\":[\".raml\"],\"language_id\":308},\"RDoc\":{\"type\":\"prose\",\"ace_mode\":\"rdoc\",\"wrap\":true,\"extensions\":[\".rdoc\"],\"tm_scope\":\"text.rdoc\",\"language_id\":309},\"REALbasic\":{\"type\":\"programming\",\"extensions\":[\".rbbas\",\".rbfrm\",\".rbmnu\",\".rbres\",\".rbtbar\",\".rbuistate\"],\"tm_scope\":\"source.vbnet\",\"ace_mode\":\"text\",\"language_id\":310},\"REXX\":{\"type\":\"programming\",\"aliases\":[\"arexx\"],\"extensions\":[\".rexx\",\".pprx\",\".rex\"],\"interpreters\":[\"regina\",\"rexx\"],\"tm_scope\":\"source.rexx\",\"ace_mode\":\"text\",\"language_id\":311},\"RHTML\":{\"type\":\"markup\",\"group\":\"HTML\",\"extensions\":[\".rhtml\"],\"tm_scope\":\"text.html.erb\",\"aliases\":[\"html+ruby\"],\"ace_mode\":\"rhtml\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-erb\",\"language_id\":312},\"RMarkdown\":{\"type\":\"prose\",\"wrap\":true,\"ace_mode\":\"markdown\",\"codemirror_mode\":\"gfm\",\"codemirror_mime_type\":\"text/x-gfm\",\"extensions\":[\".rmd\"],\"tm_scope\":\"source.gfm\",\"language_id\":313},\"RPC\":{\"type\":\"programming\",\"aliases\":[\"rpcgen\",\"oncrpc\",\"xdr\"],\"ace_mode\":\"c_cpp\",\"extensions\":[\".x\"],\"tm_scope\":\"source.c\",\"language_id\":1031374237},\"RPM Spec\":{\"type\":\"data\",\"tm_scope\":\"source.rpm-spec\",\"extensions\":[\".spec\"],\"aliases\":[\"specfile\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"rpm\",\"codemirror_mime_type\":\"text/x-rpm-spec\",\"language_id\":314},\"RUNOFF\":{\"type\":\"markup\",\"color\":\"#665a4e\",\"extensions\":[\".rnh\",\".rno\"],\"wrap\":true,\"tm_scope\":\"text.runoff\",\"ace_mode\":\"text\",\"language_id\":315},\"Racket\":{\"type\":\"programming\",\"color\":\"#3c5caa\",\"extensions\":[\".rkt\",\".rktd\",\".rktl\",\".scrbl\"],\"interpreters\":[\"racket\"],\"tm_scope\":\"source.racket\",\"ace_mode\":\"lisp\",\"language_id\":316},\"Ragel\":{\"type\":\"programming\",\"color\":\"#9d5200\",\"extensions\":[\".rl\"],\"aliases\":[\"ragel-rb\",\"ragel-ruby\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":317},\"Raku\":{\"type\":\"programming\",\"color\":\"#0000fb\",\"extensions\":[\".6pl\",\".6pm\",\".nqp\",\".p6\",\".p6l\",\".p6m\",\".pl\",\".pl6\",\".pm\",\".pm6\",\".t\"],\"interpreters\":[\"perl6\",\"raku\",\"rakudo\"],\"aliases\":[\"perl6\",\"perl-6\"],\"tm_scope\":\"source.perl6fe\",\"ace_mode\":\"perl\",\"codemirror_mode\":\"perl\",\"codemirror_mime_type\":\"text/x-perl\",\"language_id\":283},\"Rascal\":{\"type\":\"programming\",\"color\":\"#fffaa0\",\"extensions\":[\".rsc\"],\"tm_scope\":\"source.rascal\",\"ace_mode\":\"text\",\"language_id\":173616037},\"Raw token data\":{\"type\":\"data\",\"aliases\":[\"raw\"],\"extensions\":[\".raw\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":318},\"Readline Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"inputrc\",\"readline\"],\"filenames\":[\".inputrc\",\"inputrc\"],\"tm_scope\":\"source.inputrc\",\"ace_mode\":\"text\",\"language_id\":538732839},\"Reason\":{\"type\":\"programming\",\"color\":\"#ff5847\",\"ace_mode\":\"rust\",\"codemirror_mode\":\"rust\",\"codemirror_mime_type\":\"text/x-rustsrc\",\"extensions\":[\".re\",\".rei\"],\"interpreters\":[\"ocaml\"],\"tm_scope\":\"source.reason\",\"language_id\":869538413},\"Rebol\":{\"type\":\"programming\",\"color\":\"#358a5b\",\"extensions\":[\".reb\",\".r\",\".r2\",\".r3\",\".rebol\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.rebol\",\"language_id\":319},\"Red\":{\"type\":\"programming\",\"color\":\"#f50000\",\"extensions\":[\".red\",\".reds\"],\"aliases\":[\"red/system\"],\"tm_scope\":\"source.red\",\"ace_mode\":\"text\",\"language_id\":320},\"Redcode\":{\"type\":\"programming\",\"extensions\":[\".cw\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":321},\"Regular Expression\":{\"type\":\"data\",\"extensions\":[\".regexp\",\".regex\"],\"aliases\":[\"regexp\",\"regex\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.regexp\",\"language_id\":363378884},\"Ren'Py\":{\"type\":\"programming\",\"aliases\":[\"renpy\"],\"color\":\"#ff7f7f\",\"extensions\":[\".rpy\"],\"tm_scope\":\"source.renpy\",\"ace_mode\":\"python\",\"language_id\":322},\"RenderScript\":{\"type\":\"programming\",\"extensions\":[\".rs\",\".rsh\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":323},\"Rich Text Format\":{\"type\":\"markup\",\"extensions\":[\".rtf\"],\"tm_scope\":\"text.rtf\",\"ace_mode\":\"text\",\"language_id\":51601661},\"Ring\":{\"type\":\"programming\",\"color\":\"#2D54CB\",\"extensions\":[\".ring\"],\"tm_scope\":\"source.ring\",\"ace_mode\":\"text\",\"language_id\":431},\"Riot\":{\"type\":\"markup\",\"color\":\"#A71E49\",\"ace_mode\":\"html\",\"extensions\":[\".riot\"],\"tm_scope\":\"text.html.riot\",\"language_id\":878396783},\"RobotFramework\":{\"type\":\"programming\",\"extensions\":[\".robot\"],\"tm_scope\":\"text.robot\",\"ace_mode\":\"text\",\"language_id\":324},\"Roff\":{\"type\":\"markup\",\"color\":\"#ecdebe\",\"extensions\":[\".roff\",\".1\",\".1in\",\".1m\",\".1x\",\".2\",\".3\",\".3in\",\".3m\",\".3p\",\".3pm\",\".3qt\",\".3x\",\".4\",\".5\",\".6\",\".7\",\".8\",\".9\",\".l\",\".man\",\".mdoc\",\".me\",\".ms\",\".n\",\".nr\",\".rno\",\".tmac\"],\"filenames\":[\"eqnrc\",\"mmn\",\"mmt\",\"troffrc\",\"troffrc-end\"],\"tm_scope\":\"text.roff\",\"aliases\":[\"groff\",\"man\",\"manpage\",\"man page\",\"man-page\",\"mdoc\",\"nroff\",\"troff\"],\"wrap\":true,\"ace_mode\":\"text\",\"codemirror_mode\":\"troff\",\"codemirror_mime_type\":\"text/troff\",\"language_id\":141},\"Roff Manpage\":{\"type\":\"markup\",\"group\":\"Roff\",\"extensions\":[\".1\",\".1in\",\".1m\",\".1x\",\".2\",\".3\",\".3in\",\".3m\",\".3p\",\".3pm\",\".3qt\",\".3x\",\".4\",\".5\",\".6\",\".7\",\".8\",\".9\",\".man\",\".mdoc\"],\"wrap\":true,\"tm_scope\":\"text.roff\",\"ace_mode\":\"text\",\"codemirror_mode\":\"troff\",\"codemirror_mime_type\":\"text/troff\",\"language_id\":612669833},\"Rouge\":{\"type\":\"programming\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"color\":\"#cc0088\",\"extensions\":[\".rg\"],\"tm_scope\":\"source.clojure\",\"language_id\":325},\"Ruby\":{\"type\":\"programming\",\"tm_scope\":\"source.ruby\",\"ace_mode\":\"ruby\",\"codemirror_mode\":\"ruby\",\"codemirror_mime_type\":\"text/x-ruby\",\"color\":\"#701516\",\"aliases\":[\"jruby\",\"macruby\",\"rake\",\"rb\",\"rbx\"],\"extensions\":[\".rb\",\".builder\",\".eye\",\".fcgi\",\".gemspec\",\".god\",\".jbuilder\",\".mspec\",\".pluginspec\",\".podspec\",\".rabl\",\".rake\",\".rbi\",\".rbuild\",\".rbw\",\".rbx\",\".ru\",\".ruby\",\".spec\",\".thor\",\".watchr\"],\"interpreters\":[\"ruby\",\"macruby\",\"rake\",\"jruby\",\"rbx\"],\"filenames\":[\".irbrc\",\".pryrc\",\"Appraisals\",\"Berksfile\",\"Brewfile\",\"Buildfile\",\"Capfile\",\"Dangerfile\",\"Deliverfile\",\"Fastfile\",\"Gemfile\",\"Gemfile.lock\",\"Guardfile\",\"Jarfile\",\"Mavenfile\",\"Podfile\",\"Puppetfile\",\"Rakefile\",\"Snapfile\",\"Thorfile\",\"Vagrantfile\",\"buildfile\"],\"language_id\":326},\"Rust\":{\"type\":\"programming\",\"color\":\"#dea584\",\"extensions\":[\".rs\",\".rs.in\"],\"tm_scope\":\"source.rust\",\"ace_mode\":\"rust\",\"codemirror_mode\":\"rust\",\"codemirror_mime_type\":\"text/x-rustsrc\",\"language_id\":327},\"SAS\":{\"type\":\"programming\",\"color\":\"#B34936\",\"extensions\":[\".sas\"],\"tm_scope\":\"source.sas\",\"ace_mode\":\"text\",\"codemirror_mode\":\"sas\",\"codemirror_mime_type\":\"text/x-sas\",\"language_id\":328},\"SCSS\":{\"type\":\"markup\",\"tm_scope\":\"source.css.scss\",\"group\":\"CSS\",\"ace_mode\":\"scss\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/x-scss\",\"extensions\":[\".scss\"],\"language_id\":329},\"SMT\":{\"type\":\"programming\",\"extensions\":[\".smt2\",\".smt\"],\"interpreters\":[\"boolector\",\"cvc4\",\"mathsat5\",\"opensmt\",\"smtinterpol\",\"smt-rat\",\"stp\",\"verit\",\"yices2\",\"z3\"],\"tm_scope\":\"source.smt\",\"ace_mode\":\"text\",\"language_id\":330},\"SPARQL\":{\"type\":\"data\",\"tm_scope\":\"source.sparql\",\"ace_mode\":\"text\",\"codemirror_mode\":\"sparql\",\"codemirror_mime_type\":\"application/sparql-query\",\"extensions\":[\".sparql\",\".rq\"],\"language_id\":331},\"SQF\":{\"type\":\"programming\",\"color\":\"#3F3F3F\",\"extensions\":[\".sqf\",\".hqf\"],\"tm_scope\":\"source.sqf\",\"ace_mode\":\"text\",\"language_id\":332},\"SQL\":{\"type\":\"data\",\"tm_scope\":\"source.sql\",\"ace_mode\":\"sql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-sql\",\"extensions\":[\".sql\",\".cql\",\".ddl\",\".inc\",\".mysql\",\".prc\",\".tab\",\".udf\",\".viw\"],\"language_id\":333},\"SQLPL\":{\"type\":\"programming\",\"ace_mode\":\"sql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-sql\",\"tm_scope\":\"source.sql\",\"extensions\":[\".sql\",\".db2\"],\"language_id\":334},\"SRecode Template\":{\"type\":\"markup\",\"color\":\"#348a34\",\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"extensions\":[\".srt\"],\"language_id\":335},\"SSH Config\":{\"type\":\"data\",\"group\":\"INI\",\"filenames\":[\"ssh-config\",\"ssh_config\",\"sshconfig\",\"sshconfig.snip\",\"sshd-config\",\"sshd_config\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.ssh-config\",\"language_id\":554920715},\"STON\":{\"type\":\"data\",\"group\":\"Smalltalk\",\"extensions\":[\".ston\"],\"tm_scope\":\"source.smalltalk\",\"ace_mode\":\"text\",\"language_id\":336},\"SVG\":{\"type\":\"data\",\"extensions\":[\".svg\"],\"tm_scope\":\"text.xml.svg\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":337},\"SWIG\":{\"type\":\"programming\",\"extensions\":[\".i\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":1066250075},\"Sage\":{\"type\":\"programming\",\"group\":\"Python\",\"extensions\":[\".sage\",\".sagews\"],\"tm_scope\":\"source.python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":338},\"SaltStack\":{\"type\":\"programming\",\"color\":\"#646464\",\"aliases\":[\"saltstate\",\"salt\"],\"extensions\":[\".sls\"],\"tm_scope\":\"source.yaml.salt\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"language_id\":339},\"Sass\":{\"type\":\"markup\",\"tm_scope\":\"source.sass\",\"group\":\"CSS\",\"extensions\":[\".sass\"],\"ace_mode\":\"sass\",\"codemirror_mode\":\"sass\",\"codemirror_mime_type\":\"text/x-sass\",\"language_id\":340},\"Scala\":{\"type\":\"programming\",\"tm_scope\":\"source.scala\",\"ace_mode\":\"scala\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-scala\",\"color\":\"#c22d40\",\"extensions\":[\".scala\",\".kojo\",\".sbt\",\".sc\"],\"interpreters\":[\"scala\"],\"language_id\":341},\"Scaml\":{\"group\":\"HTML\",\"type\":\"markup\",\"extensions\":[\".scaml\"],\"tm_scope\":\"source.scaml\",\"ace_mode\":\"text\",\"language_id\":342},\"Scheme\":{\"type\":\"programming\",\"color\":\"#1e4aec\",\"extensions\":[\".scm\",\".sch\",\".sld\",\".sls\",\".sps\",\".ss\"],\"interpreters\":[\"scheme\",\"guile\",\"bigloo\",\"chicken\",\"csi\",\"gosh\",\"r6rs\"],\"tm_scope\":\"source.scheme\",\"ace_mode\":\"scheme\",\"codemirror_mode\":\"scheme\",\"codemirror_mime_type\":\"text/x-scheme\",\"language_id\":343},\"Scilab\":{\"type\":\"programming\",\"extensions\":[\".sci\",\".sce\",\".tst\"],\"tm_scope\":\"source.scilab\",\"ace_mode\":\"text\",\"language_id\":344},\"Self\":{\"type\":\"programming\",\"color\":\"#0579aa\",\"extensions\":[\".self\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":345},\"ShaderLab\":{\"type\":\"programming\",\"extensions\":[\".shader\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.shaderlab\",\"language_id\":664257356},\"Shell\":{\"type\":\"programming\",\"color\":\"#89e051\",\"aliases\":[\"sh\",\"shell-script\",\"bash\",\"zsh\"],\"extensions\":[\".sh\",\".bash\",\".bats\",\".cgi\",\".command\",\".fcgi\",\".ksh\",\".sh.in\",\".tmux\",\".tool\",\".zsh\"],\"filenames\":[\".bash_aliases\",\".bash_history\",\".bash_logout\",\".bash_profile\",\".bashrc\",\".cshrc\",\".login\",\".profile\",\".zlogin\",\".zlogout\",\".zprofile\",\".zshenv\",\".zshrc\",\"9fs\",\"PKGBUILD\",\"bash_aliases\",\"bash_logout\",\"bash_profile\",\"bashrc\",\"cshrc\",\"gradlew\",\"login\",\"man\",\"profile\",\"zlogin\",\"zlogout\",\"zprofile\",\"zshenv\",\"zshrc\"],\"interpreters\":[\"ash\",\"bash\",\"dash\",\"ksh\",\"mksh\",\"pdksh\",\"rc\",\"sh\",\"zsh\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":346},\"ShellSession\":{\"type\":\"programming\",\"extensions\":[\".sh-session\"],\"aliases\":[\"bash session\",\"console\"],\"tm_scope\":\"text.shell-session\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":347},\"Shen\":{\"type\":\"programming\",\"color\":\"#120F14\",\"extensions\":[\".shen\"],\"tm_scope\":\"source.shen\",\"ace_mode\":\"text\",\"language_id\":348},\"Slash\":{\"type\":\"programming\",\"color\":\"#007eff\",\"extensions\":[\".sl\"],\"tm_scope\":\"text.html.slash\",\"ace_mode\":\"text\",\"language_id\":349},\"Slice\":{\"type\":\"programming\",\"color\":\"#003fa2\",\"tm_scope\":\"source.slice\",\"ace_mode\":\"text\",\"extensions\":[\".ice\"],\"language_id\":894641667},\"Slim\":{\"group\":\"HTML\",\"type\":\"markup\",\"extensions\":[\".slim\"],\"tm_scope\":\"text.slim\",\"ace_mode\":\"text\",\"codemirror_mode\":\"slim\",\"codemirror_mime_type\":\"text/x-slim\",\"language_id\":350},\"SmPL\":{\"type\":\"programming\",\"extensions\":[\".cocci\"],\"aliases\":[\"coccinelle\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.smpl\",\"color\":\"#c94949\",\"language_id\":164123055},\"Smali\":{\"type\":\"programming\",\"extensions\":[\".smali\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.smali\",\"language_id\":351},\"Smalltalk\":{\"type\":\"programming\",\"color\":\"#596706\",\"extensions\":[\".st\",\".cs\"],\"aliases\":[\"squeak\"],\"tm_scope\":\"source.smalltalk\",\"ace_mode\":\"text\",\"codemirror_mode\":\"smalltalk\",\"codemirror_mime_type\":\"text/x-stsrc\",\"language_id\":352},\"Smarty\":{\"type\":\"programming\",\"extensions\":[\".tpl\"],\"ace_mode\":\"smarty\",\"codemirror_mode\":\"smarty\",\"codemirror_mime_type\":\"text/x-smarty\",\"tm_scope\":\"text.html.smarty\",\"language_id\":353},\"Solidity\":{\"type\":\"programming\",\"color\":\"#AA6746\",\"ace_mode\":\"text\",\"tm_scope\":\"source.solidity\",\"language_id\":237469032},\"SourcePawn\":{\"type\":\"programming\",\"color\":\"#5c7611\",\"aliases\":[\"sourcemod\"],\"extensions\":[\".sp\",\".inc\"],\"tm_scope\":\"source.sourcepawn\",\"ace_mode\":\"text\",\"language_id\":354},\"Spline Font Database\":{\"type\":\"data\",\"extensions\":[\".sfd\"],\"tm_scope\":\"text.sfd\",\"ace_mode\":\"yaml\",\"language_id\":767169629},\"Squirrel\":{\"type\":\"programming\",\"color\":\"#800000\",\"extensions\":[\".nut\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":355},\"Stan\":{\"type\":\"programming\",\"color\":\"#b2011d\",\"extensions\":[\".stan\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.stan\",\"language_id\":356},\"Standard ML\":{\"type\":\"programming\",\"color\":\"#dc566d\",\"aliases\":[\"sml\"],\"extensions\":[\".ML\",\".fun\",\".sig\",\".sml\"],\"tm_scope\":\"source.ml\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-ocaml\",\"language_id\":357},\"Starlark\":{\"type\":\"programming\",\"tm_scope\":\"source.python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"color\":\"#76d275\",\"extensions\":[\".bzl\"],\"filenames\":[\"BUCK\",\"BUILD\",\"BUILD.bazel\",\"WORKSPACE\"],\"aliases\":[\"bazel\",\"bzl\"],\"language_id\":960266174},\"Stata\":{\"type\":\"programming\",\"extensions\":[\".do\",\".ado\",\".doh\",\".ihlp\",\".mata\",\".matah\",\".sthlp\"],\"tm_scope\":\"source.stata\",\"ace_mode\":\"text\",\"language_id\":358},\"Stylus\":{\"type\":\"markup\",\"group\":\"CSS\",\"extensions\":[\".styl\"],\"tm_scope\":\"source.stylus\",\"ace_mode\":\"stylus\",\"language_id\":359},\"SubRip Text\":{\"type\":\"data\",\"extensions\":[\".srt\"],\"ace_mode\":\"text\",\"tm_scope\":\"text.srt\",\"language_id\":360},\"SugarSS\":{\"type\":\"markup\",\"tm_scope\":\"source.css.postcss.sugarss\",\"group\":\"CSS\",\"extensions\":[\".sss\"],\"ace_mode\":\"text\",\"language_id\":826404698},\"SuperCollider\":{\"type\":\"programming\",\"color\":\"#46390b\",\"extensions\":[\".sc\",\".scd\"],\"interpreters\":[\"sclang\",\"scsynth\"],\"tm_scope\":\"source.supercollider\",\"ace_mode\":\"text\",\"language_id\":361},\"Svelte\":{\"type\":\"markup\",\"tm_scope\":\"source.svelte\",\"group\":\"HTML\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"extensions\":[\".svelte\"],\"language_id\":928734530},\"Swift\":{\"type\":\"programming\",\"color\":\"#ffac45\",\"extensions\":[\".swift\"],\"tm_scope\":\"source.swift\",\"ace_mode\":\"text\",\"codemirror_mode\":\"swift\",\"codemirror_mime_type\":\"text/x-swift\",\"language_id\":362},\"SystemVerilog\":{\"type\":\"programming\",\"color\":\"#DAE1C2\",\"extensions\":[\".sv\",\".svh\",\".vh\"],\"tm_scope\":\"source.systemverilog\",\"ace_mode\":\"verilog\",\"codemirror_mode\":\"verilog\",\"codemirror_mime_type\":\"text/x-systemverilog\",\"language_id\":363},\"TI Program\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#A0AA87\",\"extensions\":[\".8xp\",\".8xk\",\".8xk.txt\",\".8xp.txt\"],\"language_id\":422,\"tm_scope\":\"none\"},\"TLA\":{\"type\":\"programming\",\"extensions\":[\".tla\"],\"tm_scope\":\"source.tla\",\"ace_mode\":\"text\",\"language_id\":364},\"TOML\":{\"type\":\"data\",\"extensions\":[\".toml\"],\"filenames\":[\"Cargo.lock\",\"Gopkg.lock\"],\"tm_scope\":\"source.toml\",\"ace_mode\":\"toml\",\"codemirror_mode\":\"toml\",\"codemirror_mime_type\":\"text/x-toml\",\"language_id\":365},\"TSQL\":{\"type\":\"programming\",\"extensions\":[\".sql\"],\"ace_mode\":\"sql\",\"tm_scope\":\"source.tsql\",\"language_id\":918334941},\"TSX\":{\"type\":\"programming\",\"group\":\"TypeScript\",\"extensions\":[\".tsx\"],\"tm_scope\":\"source.tsx\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"jsx\",\"codemirror_mime_type\":\"text/jsx\",\"language_id\":94901924},\"TXL\":{\"type\":\"programming\",\"extensions\":[\".txl\"],\"tm_scope\":\"source.txl\",\"ace_mode\":\"text\",\"language_id\":366},\"Tcl\":{\"type\":\"programming\",\"color\":\"#e4cc98\",\"extensions\":[\".tcl\",\".adp\",\".tm\"],\"filenames\":[\"owh\",\"starfield\"],\"interpreters\":[\"tclsh\",\"wish\"],\"tm_scope\":\"source.tcl\",\"ace_mode\":\"tcl\",\"codemirror_mode\":\"tcl\",\"codemirror_mime_type\":\"text/x-tcl\",\"language_id\":367},\"Tcsh\":{\"type\":\"programming\",\"group\":\"Shell\",\"extensions\":[\".tcsh\",\".csh\"],\"interpreters\":[\"tcsh\",\"csh\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":368},\"TeX\":{\"type\":\"markup\",\"color\":\"#3D6117\",\"ace_mode\":\"tex\",\"codemirror_mode\":\"stex\",\"codemirror_mime_type\":\"text/x-stex\",\"tm_scope\":\"text.tex.latex\",\"wrap\":true,\"aliases\":[\"latex\"],\"extensions\":[\".tex\",\".aux\",\".bbx\",\".cbx\",\".cls\",\".dtx\",\".ins\",\".lbx\",\".ltx\",\".mkii\",\".mkiv\",\".mkvi\",\".sty\",\".toc\"],\"language_id\":369},\"Tea\":{\"type\":\"markup\",\"extensions\":[\".tea\"],\"tm_scope\":\"source.tea\",\"ace_mode\":\"text\",\"language_id\":370},\"Terra\":{\"type\":\"programming\",\"extensions\":[\".t\"],\"color\":\"#00004c\",\"tm_scope\":\"source.terra\",\"ace_mode\":\"lua\",\"codemirror_mode\":\"lua\",\"codemirror_mime_type\":\"text/x-lua\",\"interpreters\":[\"lua\"],\"language_id\":371},\"Texinfo\":{\"type\":\"prose\",\"wrap\":true,\"extensions\":[\".texinfo\",\".texi\",\".txi\"],\"ace_mode\":\"text\",\"tm_scope\":\"text.texinfo\",\"interpreters\":[\"makeinfo\"],\"language_id\":988020015},\"Text\":{\"type\":\"prose\",\"wrap\":true,\"aliases\":[\"fundamental\"],\"extensions\":[\".txt\",\".fr\",\".nb\",\".ncl\",\".no\"],\"filenames\":[\"COPYING\",\"COPYING.regex\",\"COPYRIGHT.regex\",\"FONTLOG\",\"INSTALL\",\"INSTALL.mysql\",\"LICENSE\",\"LICENSE.mysql\",\"NEWS\",\"README.1ST\",\"README.me\",\"README.mysql\",\"click.me\",\"delete.me\",\"go.mod\",\"go.sum\",\"keep.me\",\"package.mask\",\"package.use.mask\",\"package.use.stable.mask\",\"read.me\",\"readme.1st\",\"test.me\",\"use.mask\",\"use.stable.mask\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":372},\"Textile\":{\"type\":\"prose\",\"ace_mode\":\"textile\",\"codemirror_mode\":\"textile\",\"codemirror_mime_type\":\"text/x-textile\",\"wrap\":true,\"extensions\":[\".textile\"],\"tm_scope\":\"none\",\"language_id\":373},\"Thrift\":{\"type\":\"programming\",\"tm_scope\":\"source.thrift\",\"extensions\":[\".thrift\"],\"ace_mode\":\"text\",\"language_id\":374},\"Turing\":{\"type\":\"programming\",\"color\":\"#cf142b\",\"extensions\":[\".t\",\".tu\"],\"tm_scope\":\"source.turing\",\"ace_mode\":\"text\",\"language_id\":375},\"Turtle\":{\"type\":\"data\",\"extensions\":[\".ttl\"],\"tm_scope\":\"source.turtle\",\"ace_mode\":\"text\",\"codemirror_mode\":\"turtle\",\"codemirror_mime_type\":\"text/turtle\",\"language_id\":376},\"Twig\":{\"type\":\"markup\",\"group\":\"HTML\",\"extensions\":[\".twig\"],\"tm_scope\":\"text.html.twig\",\"ace_mode\":\"twig\",\"codemirror_mode\":\"twig\",\"codemirror_mime_type\":\"text/x-twig\",\"language_id\":377},\"Type Language\":{\"type\":\"data\",\"aliases\":[\"tl\"],\"extensions\":[\".tl\"],\"tm_scope\":\"source.tl\",\"ace_mode\":\"text\",\"language_id\":632765617},\"TypeScript\":{\"type\":\"programming\",\"color\":\"#2b7489\",\"aliases\":[\"ts\"],\"interpreters\":[\"deno\",\"ts-node\"],\"extensions\":[\".ts\"],\"tm_scope\":\"source.ts\",\"ace_mode\":\"typescript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/typescript\",\"language_id\":378},\"Unified Parallel C\":{\"type\":\"programming\",\"group\":\"C\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"extensions\":[\".upc\"],\"tm_scope\":\"source.c\",\"language_id\":379},\"Unity3D Asset\":{\"type\":\"data\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"extensions\":[\".anim\",\".asset\",\".mask\",\".mat\",\".meta\",\".prefab\",\".unity\"],\"tm_scope\":\"source.yaml\",\"language_id\":380},\"Unix Assembly\":{\"type\":\"programming\",\"group\":\"Assembly\",\"extensions\":[\".s\",\".ms\"],\"tm_scope\":\"source.x86\",\"ace_mode\":\"assembly_x86\",\"language_id\":120},\"Uno\":{\"type\":\"programming\",\"extensions\":[\".uno\"],\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"tm_scope\":\"source.cs\",\"language_id\":381},\"UnrealScript\":{\"type\":\"programming\",\"color\":\"#a54c4d\",\"extensions\":[\".uc\"],\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"language_id\":382},\"UrWeb\":{\"type\":\"programming\",\"aliases\":[\"Ur/Web\",\"Ur\"],\"extensions\":[\".ur\",\".urs\"],\"tm_scope\":\"source.ur\",\"ace_mode\":\"text\",\"language_id\":383},\"V\":{\"type\":\"programming\",\"color\":\"#5d87bd\",\"aliases\":[\"vlang\"],\"extensions\":[\".v\"],\"tm_scope\":\"source.v\",\"ace_mode\":\"golang\",\"codemirror_mode\":\"go\",\"codemirror_mime_type\":\"text/x-go\",\"language_id\":603371597},\"VBA\":{\"type\":\"programming\",\"color\":\"#867db1\",\"extensions\":[\".bas\",\".cls\",\".frm\",\".frx\",\".vba\"],\"tm_scope\":\"source.vbnet\",\"aliases\":[\"vb6\",\"visual basic 6\",\"visual basic for applications\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"vb\",\"codemirror_mime_type\":\"text/x-vb\",\"language_id\":399230729},\"VBScript\":{\"type\":\"programming\",\"color\":\"#15dcdc\",\"extensions\":[\".vbs\"],\"tm_scope\":\"source.vbnet\",\"ace_mode\":\"text\",\"codemirror_mode\":\"vbscript\",\"codemirror_mime_type\":\"text/vbscript\",\"language_id\":408016005},\"VCL\":{\"type\":\"programming\",\"color\":\"#148AA8\",\"extensions\":[\".vcl\"],\"tm_scope\":\"source.varnish.vcl\",\"ace_mode\":\"text\",\"language_id\":384},\"VHDL\":{\"type\":\"programming\",\"color\":\"#adb2cb\",\"extensions\":[\".vhdl\",\".vhd\",\".vhf\",\".vhi\",\".vho\",\".vhs\",\".vht\",\".vhw\"],\"tm_scope\":\"source.vhdl\",\"ace_mode\":\"vhdl\",\"codemirror_mode\":\"vhdl\",\"codemirror_mime_type\":\"text/x-vhdl\",\"language_id\":385},\"Vala\":{\"type\":\"programming\",\"color\":\"#fbe5cd\",\"extensions\":[\".vala\",\".vapi\"],\"tm_scope\":\"source.vala\",\"ace_mode\":\"vala\",\"language_id\":386},\"Verilog\":{\"type\":\"programming\",\"color\":\"#b2b7f8\",\"extensions\":[\".v\",\".veo\"],\"tm_scope\":\"source.verilog\",\"ace_mode\":\"verilog\",\"codemirror_mode\":\"verilog\",\"codemirror_mime_type\":\"text/x-verilog\",\"language_id\":387},\"Vim Snippet\":{\"type\":\"markup\",\"aliases\":[\"SnipMate\",\"UltiSnip\",\"UltiSnips\",\"NeoSnippet\"],\"extensions\":[\".snip\",\".snippet\",\".snippets\"],\"tm_scope\":\"source.vim-snippet\",\"ace_mode\":\"text\",\"language_id\":81265970},\"Vim script\":{\"type\":\"programming\",\"color\":\"#199f4b\",\"tm_scope\":\"source.viml\",\"aliases\":[\"vim\",\"viml\",\"nvim\"],\"extensions\":[\".vim\",\".vba\",\".vmb\"],\"filenames\":[\".gvimrc\",\".nvimrc\",\".vimrc\",\"_vimrc\",\"gvimrc\",\"nvimrc\",\"vimrc\"],\"ace_mode\":\"text\",\"language_id\":388},\"Visual Basic .NET\":{\"type\":\"programming\",\"color\":\"#945db7\",\"extensions\":[\".vb\",\".vbhtml\"],\"aliases\":[\"visual basic\",\"vbnet\",\"vb .net\",\"vb.net\"],\"tm_scope\":\"source.vbnet\",\"ace_mode\":\"text\",\"codemirror_mode\":\"vb\",\"codemirror_mime_type\":\"text/x-vb\",\"language_id\":389},\"Volt\":{\"type\":\"programming\",\"color\":\"#1F1F1F\",\"extensions\":[\".volt\"],\"tm_scope\":\"source.d\",\"ace_mode\":\"d\",\"codemirror_mode\":\"d\",\"codemirror_mime_type\":\"text/x-d\",\"language_id\":390},\"Vue\":{\"type\":\"markup\",\"color\":\"#2c3e50\",\"extensions\":[\".vue\"],\"tm_scope\":\"text.html.vue\",\"ace_mode\":\"html\",\"language_id\":391},\"Wavefront Material\":{\"type\":\"data\",\"extensions\":[\".mtl\"],\"tm_scope\":\"source.wavefront.mtl\",\"ace_mode\":\"text\",\"language_id\":392},\"Wavefront Object\":{\"type\":\"data\",\"extensions\":[\".obj\"],\"tm_scope\":\"source.wavefront.obj\",\"ace_mode\":\"text\",\"language_id\":393},\"Web Ontology Language\":{\"type\":\"data\",\"extensions\":[\".owl\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"language_id\":394},\"WebAssembly\":{\"type\":\"programming\",\"color\":\"#04133b\",\"extensions\":[\".wast\",\".wat\"],\"aliases\":[\"wast\",\"wasm\"],\"tm_scope\":\"source.webassembly\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":956556503},\"WebIDL\":{\"type\":\"programming\",\"extensions\":[\".webidl\"],\"tm_scope\":\"source.webidl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"webidl\",\"codemirror_mime_type\":\"text/x-webidl\",\"language_id\":395},\"WebVTT\":{\"type\":\"data\",\"wrap\":true,\"extensions\":[\".vtt\"],\"tm_scope\":\"source.vtt\",\"ace_mode\":\"text\",\"language_id\":658679714},\"Wget Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"wgetrc\"],\"filenames\":[\".wgetrc\"],\"tm_scope\":\"source.wgetrc\",\"ace_mode\":\"text\",\"language_id\":668457123},\"Windows Registry Entries\":{\"type\":\"data\",\"extensions\":[\".reg\"],\"tm_scope\":\"source.reg\",\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":969674868},\"Wollok\":{\"type\":\"programming\",\"color\":\"#a23738\",\"extensions\":[\".wlk\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.wollok\",\"language_id\":632745969},\"World of Warcraft Addon Data\":{\"type\":\"data\",\"extensions\":[\".toc\"],\"tm_scope\":\"source.toc\",\"ace_mode\":\"text\",\"language_id\":396},\"X BitMap\":{\"type\":\"data\",\"group\":\"C\",\"aliases\":[\"xbm\"],\"extensions\":[\".xbm\"],\"ace_mode\":\"c_cpp\",\"tm_scope\":\"source.c\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":782911107},\"X Font Directory Index\":{\"type\":\"data\",\"filenames\":[\"encodings.dir\",\"fonts.alias\",\"fonts.dir\",\"fonts.scale\"],\"tm_scope\":\"source.fontdir\",\"ace_mode\":\"text\",\"language_id\":208700028},\"X PixMap\":{\"type\":\"data\",\"group\":\"C\",\"aliases\":[\"xpm\"],\"extensions\":[\".xpm\",\".pm\"],\"ace_mode\":\"c_cpp\",\"tm_scope\":\"source.c\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":781846279},\"X10\":{\"type\":\"programming\",\"aliases\":[\"xten\"],\"ace_mode\":\"text\",\"extensions\":[\".x10\"],\"color\":\"#4B6BEF\",\"tm_scope\":\"source.x10\",\"language_id\":397},\"XC\":{\"type\":\"programming\",\"color\":\"#99DA07\",\"extensions\":[\".xc\"],\"tm_scope\":\"source.xc\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":398},\"XCompose\":{\"type\":\"data\",\"filenames\":[\".XCompose\",\"XCompose\",\"xcompose\"],\"tm_scope\":\"config.xcompose\",\"ace_mode\":\"text\",\"language_id\":225167241},\"XML\":{\"type\":\"data\",\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"aliases\":[\"rss\",\"xsd\",\"wsdl\"],\"extensions\":[\".xml\",\".adml\",\".admx\",\".ant\",\".axml\",\".builds\",\".ccproj\",\".ccxml\",\".clixml\",\".cproject\",\".cscfg\",\".csdef\",\".csl\",\".csproj\",\".ct\",\".depproj\",\".dita\",\".ditamap\",\".ditaval\",\".dll.config\",\".dotsettings\",\".filters\",\".fsproj\",\".fxml\",\".glade\",\".gml\",\".gmx\",\".grxml\",\".iml\",\".ivy\",\".jelly\",\".jsproj\",\".kml\",\".launch\",\".mdpolicy\",\".mjml\",\".mm\",\".mod\",\".mxml\",\".natvis\",\".ncl\",\".ndproj\",\".nproj\",\".nuspec\",\".odd\",\".osm\",\".pkgproj\",\".pluginspec\",\".proj\",\".props\",\".ps1xml\",\".psc1\",\".pt\",\".rdf\",\".resx\",\".rss\",\".sch\",\".scxml\",\".sfproj\",\".shproj\",\".srdf\",\".storyboard\",\".sublime-snippet\",\".targets\",\".tml\",\".ts\",\".tsx\",\".ui\",\".urdf\",\".ux\",\".vbproj\",\".vcxproj\",\".vsixmanifest\",\".vssettings\",\".vstemplate\",\".vxml\",\".wixproj\",\".workflow\",\".wsdl\",\".wsf\",\".wxi\",\".wxl\",\".wxs\",\".x3d\",\".xacro\",\".xaml\",\".xib\",\".xlf\",\".xliff\",\".xmi\",\".xml.dist\",\".xproj\",\".xsd\",\".xspec\",\".xul\",\".zcml\"],\"filenames\":[\".classpath\",\".cproject\",\".project\",\"App.config\",\"NuGet.config\",\"Settings.StyleCop\",\"Web.Debug.config\",\"Web.Release.config\",\"Web.config\",\"packages.config\"],\"language_id\":399},\"XML Property List\":{\"type\":\"data\",\"group\":\"XML\",\"extensions\":[\".plist\",\".stTheme\",\".tmCommand\",\".tmLanguage\",\".tmPreferences\",\".tmSnippet\",\".tmTheme\"],\"tm_scope\":\"text.xml.plist\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":75622871},\"XPages\":{\"type\":\"data\",\"extensions\":[\".xsp-config\",\".xsp.metadata\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":400},\"XProc\":{\"type\":\"programming\",\"extensions\":[\".xpl\",\".xproc\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":401},\"XQuery\":{\"type\":\"programming\",\"color\":\"#5232e7\",\"extensions\":[\".xquery\",\".xq\",\".xql\",\".xqm\",\".xqy\"],\"ace_mode\":\"xquery\",\"codemirror_mode\":\"xquery\",\"codemirror_mime_type\":\"application/xquery\",\"tm_scope\":\"source.xq\",\"language_id\":402},\"XS\":{\"type\":\"programming\",\"extensions\":[\".xs\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":403},\"XSLT\":{\"type\":\"programming\",\"aliases\":[\"xsl\"],\"extensions\":[\".xslt\",\".xsl\"],\"tm_scope\":\"text.xml.xsl\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"color\":\"#EB8CEB\",\"language_id\":404},\"Xojo\":{\"type\":\"programming\",\"extensions\":[\".xojo_code\",\".xojo_menu\",\".xojo_report\",\".xojo_script\",\".xojo_toolbar\",\".xojo_window\"],\"tm_scope\":\"source.xojo\",\"ace_mode\":\"text\",\"language_id\":405},\"Xtend\":{\"type\":\"programming\",\"extensions\":[\".xtend\"],\"tm_scope\":\"source.xtend\",\"ace_mode\":\"text\",\"language_id\":406},\"YAML\":{\"type\":\"data\",\"tm_scope\":\"source.yaml\",\"aliases\":[\"yml\"],\"extensions\":[\".yml\",\".mir\",\".reek\",\".rviz\",\".sublime-syntax\",\".syntax\",\".yaml\",\".yaml-tmlanguage\",\".yaml.sed\",\".yml.mysql\"],\"filenames\":[\".clang-format\",\".clang-tidy\",\".gemrc\",\"glide.lock\",\"yarn.lock\"],\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"language_id\":407},\"YANG\":{\"type\":\"data\",\"extensions\":[\".yang\"],\"tm_scope\":\"source.yang\",\"ace_mode\":\"text\",\"language_id\":408},\"YARA\":{\"type\":\"programming\",\"color\":\"#220000\",\"ace_mode\":\"text\",\"extensions\":[\".yar\",\".yara\"],\"tm_scope\":\"source.yara\",\"language_id\":805122868},\"YASnippet\":{\"type\":\"markup\",\"aliases\":[\"snippet\",\"yas\"],\"color\":\"#32AB90\",\"extensions\":[\".yasnippet\"],\"tm_scope\":\"source.yasnippet\",\"ace_mode\":\"text\",\"language_id\":378760102},\"Yacc\":{\"type\":\"programming\",\"extensions\":[\".y\",\".yacc\",\".yy\"],\"tm_scope\":\"source.yacc\",\"ace_mode\":\"text\",\"color\":\"#4B6C4B\",\"language_id\":409},\"ZAP\":{\"type\":\"programming\",\"color\":\"#0d665e\",\"extensions\":[\".zap\",\".xzap\"],\"tm_scope\":\"source.zap\",\"ace_mode\":\"text\",\"language_id\":952972794},\"ZIL\":{\"type\":\"programming\",\"color\":\"#dc75e5\",\"extensions\":[\".zil\",\".mud\"],\"tm_scope\":\"source.zil\",\"ace_mode\":\"text\",\"language_id\":973483626},\"Zeek\":{\"type\":\"programming\",\"aliases\":[\"bro\"],\"extensions\":[\".zeek\",\".bro\"],\"tm_scope\":\"source.zeek\",\"ace_mode\":\"text\",\"language_id\":40},\"ZenScript\":{\"type\":\"programming\",\"color\":\"#00BCD1\",\"extensions\":[\".zs\"],\"tm_scope\":\"source.zenscript\",\"ace_mode\":\"text\",\"language_id\":494938890},\"Zephir\":{\"type\":\"programming\",\"color\":\"#118f9e\",\"extensions\":[\".zep\"],\"tm_scope\":\"source.php.zephir\",\"ace_mode\":\"php\",\"language_id\":410},\"Zig\":{\"type\":\"programming\",\"color\":\"#ec915c\",\"extensions\":[\".zig\"],\"tm_scope\":\"source.zig\",\"ace_mode\":\"text\",\"language_id\":646424281},\"Zimpl\":{\"type\":\"programming\",\"extensions\":[\".zimpl\",\".zmpl\",\".zpl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":411},\"cURL Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"curlrc\"],\"filenames\":[\".curlrc\",\"_curlrc\"],\"tm_scope\":\"source.curlrc\",\"ace_mode\":\"text\",\"language_id\":992375436},\"desktop\":{\"type\":\"data\",\"extensions\":[\".desktop\",\".desktop.in\"],\"tm_scope\":\"source.desktop\",\"ace_mode\":\"text\",\"language_id\":412},\"dircolors\":{\"type\":\"data\",\"extensions\":[\".dircolors\"],\"filenames\":[\".dir_colors\",\".dircolors\",\"DIR_COLORS\",\"_dir_colors\",\"_dircolors\",\"dir_colors\"],\"tm_scope\":\"source.dircolors\",\"ace_mode\":\"text\",\"language_id\":691605112},\"eC\":{\"type\":\"programming\",\"color\":\"#913960\",\"extensions\":[\".ec\",\".eh\"],\"tm_scope\":\"source.c.ec\",\"ace_mode\":\"text\",\"language_id\":413},\"edn\":{\"type\":\"data\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"extensions\":[\".edn\"],\"tm_scope\":\"source.clojure\",\"language_id\":414},\"fish\":{\"type\":\"programming\",\"group\":\"Shell\",\"interpreters\":[\"fish\"],\"extensions\":[\".fish\"],\"tm_scope\":\"source.fish\",\"ace_mode\":\"text\",\"language_id\":415},\"mIRC Script\":{\"type\":\"programming\",\"color\":\"#926059\",\"extensions\":[\".mrc\"],\"tm_scope\":\"source.mrc\",\"ace_mode\":\"text\",\"language_id\":517654727},\"mcfunction\":{\"type\":\"programming\",\"color\":\"#E22837\",\"extensions\":[\".mcfunction\"],\"tm_scope\":\"source.mcfunction\",\"ace_mode\":\"text\",\"language_id\":462488745},\"mupad\":{\"type\":\"programming\",\"extensions\":[\".mu\"],\"tm_scope\":\"source.mupad\",\"ace_mode\":\"text\",\"language_id\":416},\"nanorc\":{\"type\":\"data\",\"group\":\"INI\",\"extensions\":[\".nanorc\"],\"filenames\":[\".nanorc\",\"nanorc\"],\"tm_scope\":\"source.nanorc\",\"ace_mode\":\"text\",\"language_id\":775996197},\"nesC\":{\"type\":\"programming\",\"color\":\"#94B0C7\",\"extensions\":[\".nc\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.nesc\",\"language_id\":417},\"ooc\":{\"type\":\"programming\",\"color\":\"#b0b77e\",\"extensions\":[\".ooc\"],\"tm_scope\":\"source.ooc\",\"ace_mode\":\"text\",\"language_id\":418},\"q\":{\"type\":\"programming\",\"extensions\":[\".q\"],\"tm_scope\":\"source.q\",\"ace_mode\":\"text\",\"color\":\"#0040cd\",\"language_id\":970539067},\"reStructuredText\":{\"type\":\"prose\",\"wrap\":true,\"aliases\":[\"rst\"],\"extensions\":[\".rst\",\".rest\",\".rest.txt\",\".rst.txt\"],\"tm_scope\":\"text.restructuredtext\",\"ace_mode\":\"text\",\"codemirror_mode\":\"rst\",\"codemirror_mime_type\":\"text/x-rst\",\"language_id\":419},\"sed\":{\"type\":\"programming\",\"color\":\"#64b970\",\"extensions\":[\".sed\"],\"interpreters\":[\"gsed\",\"minised\",\"sed\",\"ssed\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.sed\",\"language_id\":847830017},\"wdl\":{\"type\":\"programming\",\"color\":\"#42f1f4\",\"extensions\":[\".wdl\"],\"tm_scope\":\"source.wdl\",\"ace_mode\":\"text\",\"language_id\":374521672},\"wisp\":{\"type\":\"programming\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"color\":\"#7582D1\",\"extensions\":[\".wisp\"],\"tm_scope\":\"source.clojure\",\"language_id\":420},\"xBase\":{\"type\":\"programming\",\"color\":\"#403a40\",\"aliases\":[\"advpl\",\"clipper\",\"foxpro\"],\"extensions\":[\".prg\",\".ch\",\".prw\"],\"tm_scope\":\"source.harbour\",\"ace_mode\":\"text\",\"language_id\":421}}");

/***/ }),

/***/ "./components/AutocompleteItem.tsx":
/*!*****************************************!*\
  !*** ./components/AutocompleteItem.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_AutocompleteItem_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/AutocompleteItem.global.scss */ "./styles/AutocompleteItem.global.scss");
/* harmony import */ var styles_AutocompleteItem_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_AutocompleteItem_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_img_SearchSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/SearchSvg */ "./assets/img/SearchSvg.tsx");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/AutocompleteItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AutocompleteItem = ({
  search,
  onClick
}) => {
  return __jsx("div", {
    className: "autocomplete__item autocomplete__item--animation",
    onClick: () => {
      console.log("search");
      onClick(search);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, search !== "" && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(assets_img_SearchSvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "repo-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, search !== "" ? search : "No result in cache"), search !== "" && __jsx("div", {
    className: "autocomplete__item-type",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("span", {
    "aria-label": "in all of GitHub",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "All GitHub"), __jsx("span", {
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "\u21B5")));
};

/* harmony default export */ __webpack_exports__["default"] = (AutocompleteItem);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_Header_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/Header.global.scss */ "./styles/Header.global.scss");
/* harmony import */ var styles_Header_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_Header_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers */ "./containers/index.ts");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = ({
  onSearch
}) => {
  return __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "git-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("svg", {
    height: "32",
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "32",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("path", {
    fill: "#ffffff",
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }))), __jsx(containers__WEBPACK_IMPORTED_MODULE_2__["Search"], {
    onSearch: onSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/ItemAbout/Language.tsx":
/*!*******************************************!*\
  !*** ./components/ItemAbout/Language.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_laguage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/laguage.json */ "./assets/laguage.json");
var assets_laguage_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/laguage.json */ "./assets/laguage.json", 1);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/ItemAbout/Language.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Language = ({
  language
}) => {
  return language && __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("language", "div-flex-center"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-ib",
    style: {
      backgroundColor: `${assets_laguage_json__WEBPACK_IMPORTED_MODULE_2__[language].color}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "d-ib",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, " ", language));
};

/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ }),

/***/ "./components/ItemAbout/License.tsx":
/*!******************************************!*\
  !*** ./components/ItemAbout/License.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/ItemAbout/License.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const License = ({
  license
}) => {
  return license && license !== "Other" && __jsx("div", {
    className: "license",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 39
    }
  }, license);
};

/* harmony default export */ __webpack_exports__["default"] = (License);

/***/ }),

/***/ "./components/ItemAbout/Stars.tsx":
/*!****************************************!*\
  !*** ./components/ItemAbout/Stars.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_kFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/kFormatter */ "./utils/kFormatter.ts");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/ItemAbout/Stars.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Stars = ({
  full_name,
  stargazers_count
}) => {
  return __jsx("a", {
    href: `https://github.com/${full_name}/stargazers`,
    className: "d-ib",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("stars", "div-flex-center"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("svg", {
    "aria-label": "star",
    viewBox: "0 0 14 16",
    version: "1.1",
    width: "14",
    height: "16",
    role: "img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Object(utils_kFormatter__WEBPACK_IMPORTED_MODULE_2__["default"])(stargazers_count, 0))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ }),

/***/ "./components/ItemAbout/Updated.tsx":
/*!******************************************!*\
  !*** ./components/ItemAbout/Updated.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/ItemAbout/Updated.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Updated = ({
  updated_at
}) => {
  return __jsx("div", {
    className: "updated",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 10
    }
  }, updated_at);
};

/* harmony default export */ __webpack_exports__["default"] = (Updated);

/***/ }),

/***/ "./components/ItemAbout/index.tsx":
/*!****************************************!*\
  !*** ./components/ItemAbout/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stars */ "./components/ItemAbout/Stars.tsx");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Language */ "./components/ItemAbout/Language.tsx");
/* harmony import */ var _License__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./License */ "./components/ItemAbout/License.tsx");
/* harmony import */ var _Updated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Updated */ "./components/ItemAbout/Updated.tsx");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/ItemAbout/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ItemAbout = ({
  full_name,
  stargazers_count,
  language,
  license,
  updated_at,
  issues_need_help
}) => {
  return __jsx("div", {
    className: "repo-item__about div-flex-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_1__["default"], {
    full_name: full_name,
    stargazers_count: stargazers_count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_Language__WEBPACK_IMPORTED_MODULE_2__["default"], {
    language: language,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_License__WEBPACK_IMPORTED_MODULE_3__["default"], {
    license: license,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_Updated__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updated_at: updated_at,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), issues_need_help !== 0 && __jsx("div", {
    className: "issues-need-help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, issues_need_help, " issues need help"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemAbout);

/***/ }),

/***/ "./components/ItemTopics.tsx":
/*!***********************************!*\
  !*** ./components/ItemTopics.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_ItemTopics_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/ItemTopics.global.scss */ "./styles/ItemTopics.global.scss");
/* harmony import */ var styles_ItemTopics_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_ItemTopics_global_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/ItemTopics.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ItemTopics = ({
  topics
}) => {
  return __jsx("div", {
    className: "topics",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, topics && topics.map((topic, index) => {
    return __jsx("a", {
      key: index,
      href: `https://github.com/topics/${topic}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "topics__topic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    }, topic));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemTopics);

/***/ }),

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/Pagination.global.scss */ "./styles/Pagination.global.scss");
/* harmony import */ var styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/Pagination.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const paginationValues = (count, current) => {
  const res = [];

  if (count > 9) {
    res.push("1");
    res.push("2");

    if (current > 5) {
      res.push("...");
      res.push((current - 2).toString());
      res.push((current - 1).toString());
      res.push(current.toString());
      res.push((current + 1).toString());
      res.push((current + 2).toString());

      if (count - current > 3) {
        res.push("...");
        res.push((count - 1).toString());
        res.push(count.toString());
      } else {
        res.push((count - 2).toString());
        res.push((count - 1).toString());
        res.push(count.toString());
      }
    } else {
      res.push("3");
      res.push("4");
      res.push("5");
      res.push("...");
      res.push((count - 2).toString());
      res.push((count - 1).toString());
    }
  } else {
    for (let i = 1; i <= current; i++) res.push(i.toString());
  }

  return res;
};

const PaginationItem = ({
  disable,
  enable,
  text,
  onClick
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pagination__item", {
      "pagination__item--enable": enable,
      "pagination__item--disable": disable
    }),
    onClick: () => onClick(text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, text);
};

const Pagination = ({
  count,
  current = 1,
  onClick
}) => {
  const paginationArray = paginationValues(count, current);
  return __jsx("div", {
    className: "pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(PaginationItem, {
    disable: current === 1,
    enable: false,
    text: "Previous",
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), paginationArray.map((item, index) => {
    return __jsx(PaginationItem, {
      disable: item === "...",
      enable: item === current.toString(),
      text: item,
      onClick: onClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    });
  }), __jsx(PaginationItem, {
    disable: current === count,
    enable: false,
    text: "Next",
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/RepoItem.tsx":
/*!*********************************!*\
  !*** ./components/RepoItem.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var _ItemAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemAbout */ "./components/ItemAbout/index.tsx");
/* harmony import */ var styles_RepoItem_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/RepoItem.global.scss */ "./styles/RepoItem.global.scss");
/* harmony import */ var styles_RepoItem_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_RepoItem_global_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_img_OcticonSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/img/OcticonSvg */ "./assets/img/OcticonSvg.tsx");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/RepoItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const RepoItem = ({
  item
}) => {
  const {
    full_name,
    html_url,
    description,
    stargazers_count,
    language,
    license,
    updated_at,
    topics,
    issues_need_help
  } = item;
  return __jsx("div", {
    className: "repo-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "repo-item__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(assets_img_OcticonSvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "repo-item__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "repo-item__name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: html_url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, full_name)), __jsx("p", {
    className: "repo-item__description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, description), __jsx(components__WEBPACK_IMPORTED_MODULE_1__["ItemTopics"], {
    topics: topics,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_ItemAbout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    full_name: full_name,
    stargazers_count: stargazers_count,
    language: language,
    license: license,
    updated_at: updated_at,
    issues_need_help: issues_need_help,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RepoItem);

/***/ }),

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./utils/index.ts");
/* harmony import */ var containers_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/Autocomplete */ "./containers/Autocomplete.tsx");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/components/Search.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Search = ({
  onSearch
}) => {
  const {
    0: inputFocused,
    1: setInputFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: searchCacheValue,
    1: setSearchCacheValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onInputFocus = () => {
    setInputFocused(true);
    setSearchCacheValue(utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].searchIn(inputValue));
  };

  const onInputBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
    }, 500);
  };

  const onInputChange = event => {
    setSearchCacheValue(utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].searchIn(inputValue));
    setInputValue(event.target.value);
  };

  const onEnter = event => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].writeTo(event.target.value);
      event.target.blur();
    }
  };

  return __jsx("div", {
    className: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("search__input", {
      "search__input--focus": inputFocused
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search or jump to...",
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    onKeyDown: onEnter,
    onChange: onInputChange,
    value: inputValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: "https://github.githubassets.com/images/search-key-slash.svg",
    alt: "Search icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "search__autocomplete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, inputFocused && __jsx(containers_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSearch: value => {
      setInputValue(value);
      onSearch(value);
    },
    searchCache: searchCacheValue,
    search: inputValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Header, Search, AutocompleteItem, RepoItem, ItemTopics, Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./components/Search.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _AutocompleteItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutocompleteItem */ "./components/AutocompleteItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteItem", function() { return _AutocompleteItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RepoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RepoItem */ "./components/RepoItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepoItem", function() { return _RepoItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ItemTopics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTopics */ "./components/ItemTopics.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemTopics", function() { return _ItemTopics__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./containers/Autocomplete.tsx":
/*!*************************************!*\
  !*** ./containers/Autocomplete.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/containers/Autocomplete.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Autocomplete = ({
  searchCache,
  search,
  onSearch
}) => {
  return __jsx("div", {
    className: "autocomplete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, searchCache.length !== 0 ? searchCache.map((item, index) => __jsx(components__WEBPACK_IMPORTED_MODULE_1__["AutocompleteItem"], {
    onClick: onSearch,
    key: index,
    search: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })) : __jsx(components__WEBPACK_IMPORTED_MODULE_1__["AutocompleteItem"], {
    onClick: onSearch,
    search: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ }),

/***/ "./containers/Search.tsx":
/*!*******************************!*\
  !*** ./containers/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var styles_Search_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/Search.global.scss */ "./styles/Search.global.scss");
/* harmony import */ var styles_Search_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_Search_global_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/oleksii/Documents/bettermetest/containers/Search.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Search = ({
  onSearch
}) => {
  return __jsx(components__WEBPACK_IMPORTED_MODULE_1__["Search"], {
    onSearch: onSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./containers/SearchResult.tsx":
/*!*************************************!*\
  !*** ./containers/SearchResult.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/containers/SearchResult.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchResult = ({
  total_count,
  repos
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "search-result-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, total_count.toLocaleString(), " repository results"), repos.map((item, index) => {
    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__["RepoItem"], {
      key: index,
      item: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ }),

/***/ "./containers/index.ts":
/*!*****************************!*\
  !*** ./containers/index.ts ***!
  \*****************************/
/*! exports provided: Search, SearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "./containers/Search.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResult */ "./containers/SearchResult.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchResult", function() { return _SearchResult__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./core/axiosGitApi.ts":
/*!*****************************!*\
  !*** ./core/axiosGitApi.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Accept"] = "application/vnd.github.mercy-preview+json";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = `Bearer 22f0c67ba87ca65248b5f1cf5cbe723d98720100`;
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "https://api.github.com";
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./core/index.ts":
/*!***********************!*\
  !*** ./core/index.ts ***!
  \***********************/
/*! exports provided: axiosGitApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axiosGitApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosGitApi */ "./core/axiosGitApi.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axiosGitApi", function() { return _axiosGitApi__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_repoSearch_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/repoSearch/actions */ "./store/repoSearch/actions.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers */ "./containers/index.ts");
var _jsxFileName = "/home/oleksii/Documents/bettermetest/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function HomePage({
  total_count,
  repos,
  fetchSearch
}) {
  const {
    0: curPage,
    1: setCurPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: curRequest,
    1: setCurRequest
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const onSearch = request => {
    setCurRequest(request);
    fetchSearch({
      q: request,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: curPage
    });
    setCurPage(1);
  };

  const onPaginationClick = value => {
    if (value === "Previous") {
      if (curPage !== 1) setCurPage(curPage - 1);
    } else if (value === "Next") {
      if (curPage !== Math.floor(total_count / 30)) setCurPage(curPage + 1);
    } else if (curPage.toString !== value) {
      setCurPage(Number(value));
    }

    window.scrollTo(0, 0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (curRequest === "") return;
    fetchSearch({
      q: curRequest,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: curPage
    });
  }, [curPage]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), repos && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(containers__WEBPACK_IMPORTED_MODULE_4__["SearchResult"], {
    total_count: total_count,
    repos: repos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(components__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    count: Math.floor(total_count / 30),
    current: curPage,
    onClick: onPaginationClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }))));
}

const mapStateToProps = ({
  repoSearchReducer
}) => ({
  total_count: repoSearchReducer.total_count,
  repos: repoSearchReducer.repos
});

const mapDispatchToProps = {
  fetchSearch: store_repoSearch_actions__WEBPACK_IMPORTED_MODULE_2__["default"].fetchSearch
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(HomePage));

/***/ }),

/***/ "./store/repoSearch/actions.ts":
/*!*************************************!*\
  !*** ./store/repoSearch/actions.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/repoSearch/types.ts");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/api */ "./utils/api/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Actions = {
  setSearchResult: searchResult => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH_RESULT"],
      payload: searchResult
    };
  },
  fetchSearch: searchQuery => async dispatch => {
    try {
      const repos = await utils_api__WEBPACK_IMPORTED_MODULE_1__["gitApi"].searchRepository(searchQuery);
      let {
        items,
        total_count
      } = repos;
      items = parseRepos(items);
      items = await addTopics(items);
      items = await addIssuesNeedHelp(items);
      dispatch(Actions.setSearchResult({
        total_count,
        repos: items
      }));
    } catch (err) {
      console.log(err);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Actions);

const parseRepos = repos => {
  return repos.map(item => {
    const {
      name,
      full_name,
      owner,
      html_url,
      description,
      stargazers_count,
      language,
      license,
      updated_at
    } = item;
    return {
      name,
      full_name,
      owner: owner.login,
      html_url,
      description,
      stargazers_count,
      language,
      license: license ? license.name : null,
      updated_at
    };
  });
};

const addTopics = repos => {
  return Promise.all(repos.map(async item => {
    try {
      const topics = await utils_api__WEBPACK_IMPORTED_MODULE_1__["gitApi"].getRepositoryTopics(item.owner, item.name);
      return _objectSpread({
        topics: topics ? topics.names : null
      }, item);
    } catch (error) {
      return item;
    }
  }));
};

const addIssuesNeedHelp = repos => {
  return Promise.all(repos.map(async item => {
    try {
      const issues = await utils_api__WEBPACK_IMPORTED_MODULE_1__["gitApi"].getRepositoryIssuesNeedHelp(item.owner, item.name);
      return _objectSpread({
        issues_need_help: issues.length
      }, item);
    } catch {
      return item;
    }
  }));
};

/***/ }),

/***/ "./store/repoSearch/types.ts":
/*!***********************************!*\
  !*** ./store/repoSearch/types.ts ***!
  \***********************************/
/*! exports provided: SET_SEARCH_RESULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_RESULT", function() { return SET_SEARCH_RESULT; });
const SET_SEARCH_RESULT = "SET_REPO_SEARCH_RESULT";

/***/ }),

/***/ "./styles/AutocompleteItem.global.scss":
/*!*********************************************!*\
  !*** ./styles/AutocompleteItem.global.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Header.global.scss":
/*!***********************************!*\
  !*** ./styles/Header.global.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/ItemTopics.global.scss":
/*!***************************************!*\
  !*** ./styles/ItemTopics.global.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Pagination.global.scss":
/*!***************************************!*\
  !*** ./styles/Pagination.global.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/RepoItem.global.scss":
/*!*************************************!*\
  !*** ./styles/RepoItem.global.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Search.global.scss":
/*!***********************************!*\
  !*** ./styles/Search.global.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/api/git.ts":
/*!**************************!*\
  !*** ./utils/api/git.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ "./utils/index.ts");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ "./core/index.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
  searchRepository: async (searchRequest = {}) => {
    return await core__WEBPACK_IMPORTED_MODULE_1__["axiosGitApi"].get(`/search/repositories${Object(utils__WEBPACK_IMPORTED_MODULE_0__["getRequestParser"])(searchRequest)}`).then(response => {
      if (response.status !== 200) {
        return Promise.reject(response.status);
      }

      return Promise.resolve(response.data);
    });
  },
  getRepositoryTopics: async (owner, repo) => {
    return await core__WEBPACK_IMPORTED_MODULE_1__["axiosGitApi"].get(`/repos/${owner}/${repo}/topics`).then(response => {
      if (response.status !== 200) {
        return Promise.reject(response.status);
      }

      return Promise.resolve(response.data);
    });
  },
  getRepositoryIssuesNeedHelp: async (owner, repo) => {
    return await core__WEBPACK_IMPORTED_MODULE_1__["axiosGitApi"].get(`/repos/${owner}/${repo}/issues${Object(utils__WEBPACK_IMPORTED_MODULE_0__["getRequestParser"])({
      labels: "help wanted"
    })}`).then(response => {
      if (response.status !== 200) {
        return Promise.reject(response.status);
      }

      return Promise.resolve(response.data);
    });
  }
});

/***/ }),

/***/ "./utils/api/index.ts":
/*!****************************!*\
  !*** ./utils/api/index.ts ***!
  \****************************/
/*! exports provided: gitApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _git__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./git */ "./utils/api/git.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gitApi", function() { return _git__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./utils/getRequestParser.ts":
/*!***********************************!*\
  !*** ./utils/getRequestParser.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getRequestParser = searchRequest => {
  let searchString = "?";

  for (const [key, value] of Object.entries(searchRequest)) {
    searchString += `${key}=${value.toString().replace(" ", "+")}&`;
  }

  return searchString.slice(0, -1);
};

/* harmony default export */ __webpack_exports__["default"] = (getRequestParser);

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: getRequestParser, searchCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getRequestParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRequestParser */ "./utils/getRequestParser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequestParser", function() { return _getRequestParser__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _searchCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchCache */ "./utils/searchCache.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchCache", function() { return _searchCache__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./utils/kFormatter.ts":
/*!*****************************!*\
  !*** ./utils/kFormatter.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const kFormatter = (num, fixed) => {
  return Math.abs(num) > 999 ? String(Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(fixed))) + "k" : String(Math.sign(num) * Math.abs(num));
};

/* harmony default export */ __webpack_exports__["default"] = (kFormatter);

/***/ }),

/***/ "./utils/searchCache.ts":
/*!******************************!*\
  !*** ./utils/searchCache.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const GIT_SEARCH_CACHE = "gitSearchCache";
/* harmony default export */ __webpack_exports__["default"] = ({
  writeTo: searchRequest => {
    if (localStorage) {
      if (!localStorage[GIT_SEARCH_CACHE]) localStorage[GIT_SEARCH_CACHE] = JSON.stringify(searchRequest);
      const store = new Set(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      store.add(searchRequest);
      localStorage[GIT_SEARCH_CACHE] = JSON.stringify(Array.from(store));
    }
  },
  searchIn: searchRequest => {
    if (localStorage) {
      if (!localStorage[GIT_SEARCH_CACHE]) {
        localStorage[GIT_SEARCH_CACHE] = "";
        return [];
      }

      const store = new Set(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      const result = Array.from(store).filter(item => item.search(searchRequest) !== -1);
      return result;
    }
  }
});

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oleksii/Documents/bettermetest/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map