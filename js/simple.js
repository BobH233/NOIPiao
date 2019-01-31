function submit(){
    alert("fuck");
}
require.config({ paths: { 'vs': 'monaco-editor/min/vs' }});
var editor;
require(['vs/editor/editor.main'], function() {
    monaco.languages.register({ id: 'BobHCpp' });
    monaco.languages.registerCompletionItemProvider('BobHCpp', {
        provideCompletionItems: () => {
        return [
            {
                label: 'using',
                kind: monaco.languages.CompletionItemKind.Keyword
            },{
                label: 'include',
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: {
                    value: 'include <bits/stdc++.h>'
                }
            },{
                label: 'namespace',
                kind: monaco.languages.CompletionItemKind.Keyword
            },{
                label: 'std',
                kind: monaco.languages.CompletionItemKind.Keyword
            },{
                label: 'freopen',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'freopen(${1:"xx.in"},${2:"r/w"},${3:stdin/stdout});'
                }
            },{
                label: 'sort',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'sort();'
                },
                documentation: '快速排序'
            },{
                label: 'stable_sort',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'stable_sort();'
                },
                documentation: '归并排序'
            }, {
                label: 'if',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: {
                    value: [
                        'if (${1:}) {',
                        '\t',
                        '} else {',
                        '\t',
                        '}'
                    ].join('\n')
                },
                documentation: '判断分支'
            },{
                label: 'return',
                kind: monaco.languages.CompletionItemKind.Keyword,
                documentation: '返回'
            },{
                label: 'int',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'double',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'long long',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'cin',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'cout',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'struct',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'vector',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'set',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'priority_queue',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'map',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'reverse',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'reverse();'
                },
                documentation: '首尾颠倒'
            },{
                label: 'main',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'const',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'while',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: {
                    value: [
                        'while(${1:}){',
                        '\t',
                        '}'
                    ].join('\n')
                },
                documentation: '循环分支'
            },{
                label: 'for',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: {
                    value: [
                        'for(${1:}){',
                        '\t',
                        '}'
                    ].join('\n')
                },
                documentation: '循环分支'
            },{
                label: 'ios',
                kind: monaco.languages.CompletionItemKind.Keyword,
            },{
                label: 'sync_with_stdio',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'sync_with_stdio(false);'
                },
                documentation: '关闭cin与scanf的同步'
            },{
                label: 'tie',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'tie(0);'
                },
                documentation: '关闭cin与cout的同步'
            },{
                label: 'memset',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'memset();'
                },
                documentation: '内存填充'
            },{
                label: 'max',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'max();'
                },
                documentation: '取最大值'
            },{
                label: 'min',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: {
                    value: 'min();'
                },
                documentation: '取最小值'
            }
        ]
    }
});
    monaco.languages.setMonarchTokensProvider('BobHCpp',
        {
            keywords: [
                'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',
                'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',
                'object', 'dynamic', 'string', 'assembly', 'module', 'is', 'as', 'ref',
                'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',
                'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',
                'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',
                'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',
                'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',
                'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',
                'field', 'event', 'method', 'param', 'property', 'public', 'protected',
                'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',
                'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',
                'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',
                'null',
                '=',':',
                'typedef'
            ],

            typeKeywords: [
                'bool', 'byte', 'char', 'decimal', 'double', 'fixed', 'float',
                'int', 'long','object','sbyte','short','string','uint','ulong',
                'ushort','void'
            ],

            keywordInType: [
                'struct','new','where','class'
            ],

            typeFollows: [
                'as', 'class', 'interface', 'struct', 'enum', 'new','where',
                ':',
            ],

            namespaceFollows: [
                'namespace', 'using',
            ],

            operators: [
                '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
                '+', '-', '*', '/', '%', '!', '~', '++', '--','+=',
                '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'
            ],

            symbols:  /[=><!~?:&|+\-*\/\^%]+/,

            // escape sequences
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

            // The main tokenizer for our languages
            tokenizer: {
                root: [
                    // Try to show type names nicely: for parameters: Type name
                    [/[A-Z][\w]*(?=[\.\w]*(\s|\/\*!\*\/)+\w)/, 'type.identifier' ],

                    // Generic types List<int>.
                    // Unfortunately, colors explicit nested generic method instantiation as Method<List<int>>(x) wrongly
                    [/([A-Z][\w]*[\.\w]*)(<)(?![^>]+>\s*(?:\(|$))/, ['type.identifier', { token: '@brackets', next: '@type' } ]],
                    [/([A-Z][\w]*[\.\w]*)(<)/, ['identifier', { token: '@brackets', next: '@type' } ]],

                    // These take care of 'System.Console.WriteLine'.
                    // These two rules are not 100% right: if a non-qualified field has an uppercase name
                    // it colors it as a type.. but you could use this.Field to circumenvent this.
                    [/[A-Z][\w]*(?=\.[A-Z])/, 'type.identifier' ],
                    [/[A-Z][\w]*(?=\.[a-z_])/, 'type.identifier', '@qualified' ],

                    // identifiers and keywords
                    [/[a-zA-Z_]\w*/, { cases: {'@typeFollows': { token: 'keyword', next: '@type' },
                            '@namespaceFollows': { token: 'keyword', next: '@namespace' },
                            '@typeKeywords': { token: 'type.identifier', next: '@qualified' },
                            '@keywords': { token: 'keyword', next: '@qualified' },
                            '@default': { token: 'identifier', next: '@qualified' } } }],

                    // whitespace
                    { include: '@whitespace' },

                    // delimiters and operators
                    [/[{}()\[\]]/, '@brackets'],
                    [/[<>](?!@symbols)/, '@brackets'],
                    [/@symbols/, { cases: { '@operators': 'operator',
                            '@default'  : '' } } ],

                    // literal string
                    [/@"/, { token: 'string.quote', bracket: '@open', next: '@litstring' } ],

                    // numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],

                    // delimiter: after number because of .\d floats
                    [/[;,.]/, 'delimiter'],

                    // strings
                    [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
                    [/"/,  { token: 'string.quote', bracket: '@open', next: '@string' } ],

                    // characters
                    [/'[^\\']'/, 'string'],
                    [/(')(@escapes)(')/, ['string','string.escape','string']],
                    [/'/, 'string.invalid']
                ],

                qualified: [
                    [/[a-zA-Z_][\w]*/, { cases: { '@typeFollows': { token: 'keyword', next: '@type' },
                            '@typeKeywords': 'type.identifier',
                            '@keywords': 'keyword',
                            '@default': 'identifier' } }],
                    [/\./, 'delimiter'],
                    ['','','@pop'],
                ],

                type: [
                    { include: '@whitespace' },
                    [/[A-Z]\w*/, 'type.identifier'],
                    // identifiers and keywords
                    [/[a-zA-Z_]\w*/, { cases: {'@typeKeywords': 'type.identifier',
                            '@keywordInType': 'keyword',
                            '@keywords': {token: '@rematch', next: '@popall'},
                            '@default': 'type.identifier' } }],
                    [/[<]/, '@brackets', '@type_nested' ],
                    [/[>]/, '@brackets', '@pop' ],
                    [/[\.,:]/, { cases: { '@keywords': 'keyword',
                            '@default': 'delimiter' }}],
                    ['','','@popall'], // catch all
                ],

                type_nested: [
                    [/[<]/, '@brackets', '@type_nested' ],
                    { include: 'type' }
                ],

                namespace: [
                    { include: '@whitespace' },
                    [/[A-Z]\w*/, 'namespace'],
                    [/[\.=]/, 'keyword'],
                    ['','','@pop'],
                ],

                comment: [
                    [/[^\/*]+/, 'comment' ],
                    // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
                    ["\\*/",    'comment', '@pop'  ],
                    [/[\/*]/,   'comment' ]
                ],

                string: [
                    [/[^\\"]+/,  'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./,      'string.escape.invalid'],
                    [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
                ],

                litstring: [
                    [/[^"]+/,    'string'],
                    [/""/,       'string.escape'],
                    [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
                ],

                whitespace: [
                    [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp' ],
                    [/[ \t\v\f\r\n]+/, 'white'],
                    [/\/\*/,       'comment', '@comment' ],
                    [/\/\/.*$/,    'comment'],
                ],
            },
        }
    );
    editor = monaco.editor.create(document.getElementById('container'), {
        value:"",
        language: 'BobHCpp',
        theme: "vs-dark",
        fontSize:20,
    });
});
function submit(){
    var submiter = document.getElementById("inputer").value;
    var intro = document.getElementById("introduct").value;
    var langs = document.getElementById("langS").value;
    var content = editor.getValue();
    if(langs == 1){
        langs = "C++";
    }else if(langs == 2){
        langs = "C#";
    }else if(langs == 3){
        langs = "Javascript";
    }else{
        langs = "网页漏洞发现者";
    }
    //console.log(submiter,intro,langs,content);
    $.ajax({
        url:'./SubCode.php',
        type:'POST',
        async:true,
        data:{
            submiter:submiter,
            code:content,
            lang:langs,
            intro:intro
        },
        timeout:3000,
        dataType:'json',
        success:function(data,textStatus,jqXHR){
            //var obj = JSON.parse(data);
            //Materialize.toast(data.msg, 4000);
            //console.log(data);
            if(data.msgcode == 1){
                //aaaok = true;
                //console.log(data.msg);
                window.location.href="/view/"+data.msg;
            }
        }
    })
}