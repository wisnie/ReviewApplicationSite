export const languagesData = {
  c: {
    src: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'C is a general-purpose, procedural computer programming language.',

    sections: {
      overview:
        'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, while a static type system prevents unintended operations. By design, C provides constructs that map efficiently to typical machine instructions and has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computers, from supercomputers to embedded systems.',
      history:
        'The origin of C is closely tied to the development of the Unix operating system, originally implemented in assembly language on a PDP-7 by Dennis Ritchie and Ken Thompson, incorporating several ideas from colleagues. Eventually, they decided to port the operating system to a PDP-11. The original PDP-11 version of Unix was also developed in assembly language.',
      syntax:
        'C has a formal grammar specified by the C standard. Line endings are generally not significant in C; however, line boundaries do have significance during the preprocessing phase. Comments may appear either between the delimiters /* and */, or (since C99) following // until the end of the line. Comments delimited by /* and */ do not nest, and these sequences of characters are not interpreted as comment delimiters if they appear inside string or character literals. C source files contain declarations and function definitions. Function definitions, in turn, contain declarations and statements. Declarations either define new types using keywords such as struct, union, and enum, or assign types to and perhaps reserve storage for new variables, usually by writing the type followed by the variable name.',
      curiosity:
        'C is an imperative procedural language. It was designed to be compiled using a relatively straightforward compiler to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code. The language is available on various platforms, from embedded microcontrollers to supercomputers. ',
    },
  },
  java: {
    src: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.',
    sections: {
      overview:
        'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers.',
      history:
        "James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991. Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time. The language was initially called Oak after an oak tree that stood outside Gosling's office. Later the project went by the name Green and was finally renamed Java, from Java coffee, the coffee from Indonesia. Gosling designed Java with a C/C++-style syntax that system and application programmers would find familiar.",
      syntax:
        'The syntax of Java is largely influenced by C++. Unlike C++, which combines the syntax for structured, generic, and object-oriented programming, Java was built almost exclusively as an object-oriented language. All code is written inside classes, and every data item is an object, with the exception of the primitive data types, (i.e. integers, floating-point numbers, boolean values, and characters), which are not objects for performance reasons. Java reuses some popular aspects of C++ (such as the printf method). Unlike C++, Java does not support operator overloading or multiple inheritance for classes, though multiple inheritance is supported for interfaces.',
      curiosity: `There were five primary goals in the creation of the Java language: 
      It must be simple, object-oriented, and familiar.
      It must be robust and secure.
      It must be architecture-neutral and portable.
      It must execute with high performance.
      It must be interpreted, threaded, and dynamic.
`,
    },
  },
  kotlin: {
    src: 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.',
    sections: {
      overview:
        'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript or native code (via LLVM). Language development costs are borne by JetBrains, while the Kotlin Foundation protects the Kotlin trademark. On 7 May 2019, Google announced that the Kotlin programming language is now its preferred language for Android app developers.',

      history:
        'In July 2011, JetBrains unveiled Project Kotlin, a new language for the JVM, which had been under development for a year. JetBrains lead Dmitry Jemerov said that most languages did not have the features they were looking for, with the exception of Scala. However, he cited the slow compilation time of Scala as a deficiency. One of the stated goals of Kotlin is to compile as quickly as Java. In February 2012, JetBrains open sourced the project under the Apache 2 license.',
      syntax: `Kotlin relaxes Java's restriction of allowing static methods and variables to exist only within a class body. Static objects and functions can be defined at the top level of the package without needing a redundant class level. For compatibility with Java, Kotlin provides a JvmName annotation which specifies a class name used when the package is viewed from a Java project. For example, @file:JvmName("JavaClassName"). `,
      curiosity:
        "In 2018, Kotlin was the fastest growing language on GitHub with 2.6 times more developers compared to 2017.  It's the fourth most loved programming language according to the 2019 Stack Overflow survey. Kotlin was also awarded the O'Reilly Open Source Software Conference Breakout Award for 2019.",
    },
  },
  cpp: {
    src: 'https://en.wikipedia.org/wiki/C%2B%2B',
    srcName: 'Wikipedia',
    shortDesc:
      'C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
    sections: {
      overview:
        'C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms. C++ was designed with a bias toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key curiosity being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, Web search, or SQL servers), and performance-critical applications (e.g. telephone switches or space probes).',

      history: `In 1979, Bjarne Stroustrup, a Danish computer scientist, began work on "C with Classes", the predecessor to C++. The motivation for creating a new language originated from Stroustrup's experience in programming for his PhD thesis. Stroustrup found that Simula had features that were very helpful for large software development, but the language was too slow for practical use, while BCPL was fast but too low-level to be suitable for large software development. When Stroustrup started working in AT&T Bell Labs, he had the problem of analyzing the UNIX kernel with respect to distributed computing. Remembering his Ph.D. experience, Stroustrup set out to enhance the C language with Simula-like features.`,
      syntax: `The C++ standard consists of two parts: the core language and the standard library. C++ programmers expect the latter on every major implementation of C++; it includes aggregate types (vectors, lists, maps, sets, queues, stacks, arrays, tuples), algorithms (find, for_each, binary_search, random_shuffle, etc.), input/output facilities (iostream, for reading from and writing to the console and files), filesystem library, localisation support, smart pointers for automatic memory management, regular expression support, multi-threading library, atomics support (allowing a variable to be read or written to by at most one thread at a time without any external synchronisation), time utilities (measurement, getting current time, etc.), a system for converting error reporting that doesn't use C++ exceptions into C++ exceptions, a random number generator and a slightly modified version of the C standard library (to make it comply with the C++ type system). `,
      curiosity: `According to Stroustrup, "the name signifies the evolutionary nature of the changes from C". This name is credited to Rick Mascitti (mid-1983) and was first used in December 1983. When Mascitti was questioned informally in 1992 about the naming, he indicated that it was given in a tongue-in-cheek spirit. The name comes from C's ++ operator (which increments the value of a variable) and a common naming convention of using "+" to indicate an enhanced computer program.`,
    },
  },
  'c-sharp': {
    src: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    sections: {
      overview:
        'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.It was developed around 2000 by Microsoft as part of its .NET initiative, and later approved as an international standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). Mono is the name of the free and open-source project to develop a compiler and runtime for the language. C# is one of the programming languages designed for the Common Language Infrastructure (CLI). C# was designed by Anders Hejlsberg, and its development team is currently led by Mads Torgersen. The most recent version is 8.0, which was released in 2019 alongside Visual Studio 2019 version 16.3.',

      history: `During the development of the .NET Framework, the class libraries were originally written using a managed code compiler system called "Simple Managed C" (SMC). In January 1999, Anders Hejlsberg formed a team to build a new language at the time called Cool, which stood for "C-like Object Oriented Language". Microsoft had considered keeping the name "Cool" as the final name of the language, but chose not to do so for trademark reasons. By the time the .NET project was publicly announced at the July 2000 Professional Developers Conference, the language had been renamed C#, and the class libraries and ASP.NET runtime had been ported to C#.`,
      syntax:
        'The core syntax of C# language is similar to that of other C-style languages such as C, C++ and Java. In particular: Semicolons are used to denote the end of a statement. Curly brackets are used to group statements. Statements are commonly grouped into methods (functions), methods into classes, and classes into namespaces. Variables are assigned using an equals sign, but compared using two consecutive equals signs. Square brackets are used with arrays, both to declare them and to get a value at a given index in one of them.',
      curiosity: `Microsoft is leading the development of the open-source reference C# compiler and set of tools, previously codenamed "Roslyn". The compiler, which is entirely written in managed code (C#), has been opened up and functionality surfaced as APIs. It is thus enabling developers to create refactoring and diagnostics tools.`,
    },
  },
  swift: {
    src: 'https://en.wikipedia.org/wiki/Swift_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc.',
    sections: {
      overview:
        "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms, it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program.",

      history: `Development of Swift started in July 2010 by Chris Lattner, with the eventual collaboration of many other programmers at Apple. Swift took language ideas "from Objective-C, Rust, Haskell, Ruby, Python, C#, CLU, and far too many others to list". On June 2, 2014, the Apple Worldwide Developers Conference (WWDC) application became the first publicly released app written with Swift. A beta version of the programming language was released to registered Apple developers at the conference, but the company did not promise that the final version of Swift would be source code compatible with the test version.`,
      syntax: `Swift is an alternative to the Objective-C language that employs modern programming-language theory concepts and strives to present a simpler syntax. During its introduction, it was described simply as "Objective-C without the C". By default, Swift does not expose pointers and other unsafe accessors, in contrast to Objective-C, which uses pointers pervasively to refer to object instances. Also, Objective-C's use of a Smalltalk-like syntax for making method calls has been replaced with a dot-notation style and namespace system more familiar to programmers from other common object-oriented (OO) languages like Java or C#.`,
      curiosity:
        'In January 2017, Chris Lattner announced his departure from Apple for a new position with Tesla Motors, with the Swift project lead role going to team veteran Ted Kremenek.',
    },
  },
  html: {
    src: 'https://en.wikipedia.org/wiki/HTML',
    srcName: 'Wikipedia',
    shortDesc:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
    sections: {
      overview: `HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web. HTML uses "markup" to annotate text, images, and other content for display in a Web browser.`,
      history:
        'In 1980, physicist Tim Berners-Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents. In 1989, Berners-Lee wrote a memo proposing an Internet-based hypertext system. Berners-Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners-Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN. In his personal notes from 1990 he listed "some of the many areas in which hypertext is used" and put an encyclopedia first.',
      syntax:
        'HTML markup consists of several key components, including those called tags (and their attributes), character-based data types, character references and entity references. HTML tags most commonly come in pairs like <h1> and </h1>, although some represent empty elements and so are unpaired, for example <img>. The first tag in such a pair is the start tag, and the second is the end tag (they are also called opening tags and closing tags). ',
      curiosity:
        'HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.',
    },
  },
  css: {
    src: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
    srcName: 'Wikipedia',
    shortDesc:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.',
    sections: {
      overview:
        'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is one of the core languages of the open Web and is standardized across Web browsers according to the W3C specification. Developed in levels, CSS1 is now obsolete, CSS2.1 is a recommendation, and CSS3, now split into smaller modules, is progressing on the standardization track.',
      history:
        'CSS was first proposed by Håkon Wium Lie on October 10, 1994. At the time, Lie was working with Tim Berners-Lee at CERN. Several other style sheet languages for the web were proposed around the same time, and discussions on public mailing lists and inside World Wide Web Consortium resulted in the first W3C CSS Recommendation (CSS1) being released in 1996. In particular, a proposal by Bert Bos was influential; he became co-author of CSS1, and is regarded as co-creator of CSS.',
      syntax:
        'CSS has a simple syntax and uses a number of English keywords to specify the names of various style properties. A style sheet consists of a list of rules. Each rule or rule-set consists of one or more selectors, and a declaration block. ',
      curiosity:
        'CSS information can be provided from various sources. These sources can be the web browser, the user and the author. The information from the author can be further classified into inline, media type, importance, selector specificity, rule order, inheritance and property definition. CSS style information can be in a separate document or it can be embedded into an HTML document. Multiple style sheets can be imported. Different styles can be applied depending on the output device being used; for example, the screen version can be quite different from the printed version, so that authors can tailor the presentation appropriately for each medium. ',
    },
  },
  fortran: {
    src: 'https://en.wikipedia.org/wiki/Fortran',
    srcName: 'Wikipedia',
    shortDesc:
      'Fortran is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing.',
    sections: {
      overview:
        "Fortran is a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing. Originally developed by IBM in the 1950s for scientific and engineering applications, FORTRAN came to dominate this area of programming early on and has been in continuous use for over six decades in computationally intensive areas such as numerical weather prediction, finite element analysis, computational fluid dynamics, computational physics, crystallography and computational chemistry. It is a popular language for high-performance computing and is used for programs that benchmark and rank the world's fastest supercomputers.",

      history: `In late 1953, John W. Backus submitted a proposal to his superiors at IBM to develop a more practical alternative to assembly language for programming their IBM 704 mainframe computer. Backus' historic FORTRAN team consisted of programmers Richard Goldberg, Sheldon F. Best, Harlan Herrick, Peter Sheridan, Roy Nutt, Robert Nelson, Irving Ziller, Harold Stern, Lois Haibt, and David Sayre.`,
      syntax:
        'Although a 1968 journal article by the authors of BASIC already described FORTRAN as "old-fashioned", Fortran has now been in use for several decades and there is a vast body of Fortran software in daily use throughout the scientific and engineering communities.',
      curiosity:
        'The names of earlier versions of the language through FORTRAN 77 were conventionally spelled in all-capitals (FORTRAN 77 was the last version in which the use of lowercase letters in keywords was strictly non-standard). The capitalization has been dropped in referring to newer versions beginning with Fortran 90. The official language standards now refer to the language as "Fortran" rather than all-caps "FORTRAN". ',
    },
  },
  python: {
    src: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    sections: {
      overview:
        "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.",

      history:
        'Python was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands as a successor to the ABC language (itself inspired by SETL), capable of exception handling and interfacing with the Amoeba operating system. Its implementation began in December 1989.',
      syntax:
        'Python is meant to be an easily readable language. Its formatting is visually uncluttered, and it often uses English keywords where other languages use punctuation. Unlike many other languages, it does not use curly brackets to delimit blocks, and semicolons after statements are optional. It has fewer syntactic exceptions and special cases than C or Pascal.',
      curiosity:
        'Python uses dynamic typing and a combination of reference counting and a cycle-detecting garbage collector for memory management. It also features dynamic name resolution (late binding), which binds method and variable names during program execution. ',
    },
  },
  ruby: {
    src: 'https://en.wikipedia.org/wiki/Ruby_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection.',
    sections: {
      overview:
        'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, Basic, and Lisp.',

      history:
        'The first public release of Ruby 0.95 was announced on Japanese domestic newsgroups on December 21, 1995. Subsequently, three more versions of Ruby were released in two days. The release coincided with the launch of the Japanese-language ruby-list mailing list, which was the first mailing list for the new language.',
      syntax:
        'The syntax of Ruby is broadly similar to that of Perl and Python. Class and method definitions are signaled by keywords, whereas code blocks can be both defined by keywords or braces. In contrast to Perl, variables are not obligatorily prefixed with a sigil. When used, the sigil changes the semantics of scope of the variable. For practical purposes there is no distinction between expressions and statements.',
      curiosity: `The name "Ruby" originated during an online chat session between Matsumoto and Keiju Ishitsuka on February 24, 1993, before any code had been written for the language. Initially two names were proposed: "Coral" and "Ruby". Matsumoto chose the latter in a later e-mail to Ishitsuka. Matsumoto later noted a factor in choosing the name "Ruby" – it was the birthstone of one of his colleagues.`,
    },
  },
  go: {
    src: 'https://en.wikipedia.org/wiki/Go_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
    sections: {
      overview:
        'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. A third-party transpiler GopherJS compiles Go to JavaScript for front-end web development.',

      history:
        'Go was designed at Google in 2007 to improve programming productivity in an era of multicore, networked machines and large codebases. In November 2016, the Go and Go Mono fonts, which are sans-serif and monospaced respectively, were released by type designers Charles Bigelow and Kris Holmes. Both fonts adhere to WGL4 and were designed to be legible, with a large x-height and distinct letterforms, by conforming to the DIN 1450 standard.',
      syntax: `Go's syntax includes changes from C aimed at keeping code concise and readable. A combined declaration/initialization operator was introduced that allows the programmer to write i := 3 or s := "Hello, world!", without specifying the types of variables used. This contrasts with C's int i = 3; and const char *s = "Hello, world!";. Semicolons still terminate statements, but are implicit when the end of a line occurs.`,
      curiosity:
        'The designers were primarily motivated by their shared dislike of C++.',
    },
  },
  haskell: {
    src: 'https://en.wikipedia.org/wiki/Haskell_(programming_language)',
    srcName: 'Wikipedia',
    shortDesc:
      'Haskell is a general-purpose, statically typed, purely functional programming language with type inference and lazy evaluation. Developed to be suitable for teaching, research and industrial application, Haskell has pioneered a number of advanced programming language features.',
    sections: {
      overview:
        "Haskell is a general-purpose, statically typed, purely functional programming language with type inference and lazy evaluation. Developed to be suitable for teaching, research and industrial application, Haskell has pioneered a number of advanced programming language features. Type classes, for example, enable type-safe operator overloading, were first proposed by Philip Wadler and Stephen Blott for Standard ML and were first implemented in Haskell. Haskell's semantics are historically based on those of the Miranda programming language, which served to focus the efforts of the initial Haskell working group.",

      history: `Following the release of Miranda by Research Software Ltd. in 1985, interest in lazy functional languages grew. By 1987, more than a dozen non-strict, purely functional programming languages existed. Miranda was the most widely used, but it was proprietary software. At the conference on Functional Programming Languages and Computer Architecture (FPCA '87) in Portland, Oregon, there was a strong consensus that a committee be formed to define an open standard for such languages. The committee's purpose was to consolidate existing functional languages into a common one to serve as a basis for future research in functional-language design.`,
      syntax:
        'Haskell features lazy evaluation, lambda expressions, pattern matching, list comprehension, type classes and type polymorphism. It is a purely functional language, which means that functions generally have no side effects. A distinct construct exists to represent side effects, orthogonal to the type of functions. A pure function can return a side effect that is subsequently executed, modeling the impure functions of other languages. ',
      curiosity:
        'As of September 2019, Haskell was the 23rd most popular programming language in terms of Google searches for tutorials and made up less than 1% of active users on the GitHub source code repository.',
    },
  },
  javascript: {
    src: 'https://en.wikipedia.org/wiki/JavaScript',
    srcName: 'Wikipedia',
    shortDesc:
      'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    sections: {
      overview:
        'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.',

      history:
        'The Mosaic web browser was released in 1993. As the first browser with a graphical user interface accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web. The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. Navigator quickly became the most used browser. During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.',
      syntax:
        'JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements, do while loops, etc.). One partial exception is scoping: JavaScript originally had only function scoping with var. ECMAScript 2015 added keywords let and const for block scoping, meaning JavaScript now has both function and block scoping. Like C, JavaScript makes a distinction between expressions and statements. One syntactic difference from C is automatic semicolon insertion, which allows the semicolons that would normally terminate statements to be omitted.',
      curiosity:
        'During the period of Internet Explorer dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, Mozilla, released the Firefox browser. Firefox was well-received by many, taking significant market share from Internet Explorer.',
    },
  },
  typescript: {
    src: 'https://en.wikipedia.org/wiki/TypeScript',
    srcName: 'Wikipedia',
    shortDesc:
      'TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.',
    sections: {
      overview:
        'TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). ',

      history:
        'TypeScript was first made public in October 2012 (at version 0.8), after two years of internal development at Microsoft. Soon after the announcement, Miguel de Icaza praised the language itself, but criticized the lack of mature IDE support apart from Microsoft Visual Studio, which was not available on Linux and OS X at that time.',
      syntax:
        'Syntactically, TypeScript is very similar to JScript .NET, another Microsoft implementation of the ECMA-262 language standard that added support for static typing and classical object-oriented language features such as classes, inheritance, interfaces, and namespaces. ',
      curiosity:
        'TypeScript originated from the shortcomings of JavaScript for the development of large-scale applications both at Microsoft and among their external customers.',
    },
  },
  php: {
    src: 'https://en.wikipedia.org/wiki/PHP',
    srcName: 'Wikipedia',
    shortDesc:
      'PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group',
    sections: {
      overview:
        'PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable.',

      history:
        'PHP development began in 1994 when Rasmus Lerdorf wrote several Common Gateway Interface (CGI) programs in C, which he used to maintain his personal homepage. He extended them to work with web forms and to communicate with databases, and called this implementation "Personal Home Page/Forms Interpreter" or PHP/FI.',
      syntax:
        'PHP stores integers in a platform-dependent range, either as a 32, 64 or 128-bit signed integer equivalent to the C-language long type. Unsigned integers are converted to signed values in certain situations, which is different behavior to many other programming languages. Integer variables can be assigned using decimal (positive and negative), octal, hexadecimal, and binary notations. ',
      curiosity: `Early PHP was not intended to be a new programming language, and grew organically, with Lerdorf noting in retrospect: "I don't know how to stop it, there was never any intent to write a programming language [...] I have absolutely no idea how to write a programming language, I just kept adding the next logical step on the way."`,
    },
  },
};
