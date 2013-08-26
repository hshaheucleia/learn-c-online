Markdown
=========

Markdown is, acording to the original author, [John Gruber], ([http://daringfireball.net/projects/markdown/] [1]):


> The overriding design goal for Markdown's
> formatting syntax is to make it as readable 
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.


Take a look at the source below to see how to perform some markdown magic.

--------------------------------------------------------------

Headings, Paragraphs, and Styling
--------
H2 headings are separated by a single dash, or an equals sign for an H1 headdding.

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, ~~strikethrough~~, `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Here's a numbered list:

 1. first thing
 2. second thing
 3. third thing

### Preformatted Code ###

This is an H3, and below is some code.

    class myTest extends yourText {
      public function __construct() {
        // o hai
      }

      public function doSomething($rawr = []) {
        foreach ($rawr as $rar) {
          echo $rar;
        }
      }
    }

Code can be defined just by tabbing in on every code line, or by separating it with backticks.

```
def hello_world(x)
    puts "Hello, #{x}"
end
```

or you can specify a specific class for some syntax highlighting.

```ruby
def hello_world(x)
    puts "Hello, #{x}"
end
```


## Markdown Extras ##

heres some tables.

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

