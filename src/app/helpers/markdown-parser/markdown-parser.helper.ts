import { MarkdownRules } from "../markdown-rules/markdown-rules.helper";

export class MarkdownParser {
  private static readonly LINE_BREAK = /  |^\s+|\s+$/g;
  private static readonly RULE_CONTENT = />{(.*?)}<\//g;
  private static readonly BREAK = "\n";
  private static readonly CONTENT_PLACEHOLDER = "{content}";

  public static transform(value: string): string {
    const content = value.replace(this.LINE_BREAK, "");
    const lines = content.split(this.BREAK);

    let final = lines.map(line => {
      //   console.log("line ", line);

      MarkdownRules.headingRules.forEach((_, key) => {
        // console.log("key ", key);

        if (line.startsWith(`${key} `)) {
          const text = this.replaceHeadingsRules(line, key);
          line = this.addHeadingContent(text, key);
        }
      });

      MarkdownRules.textRules.forEach((_, key) => {
        // console.log("key ", key);

        const occurences = this.countTextOccurences(line, key);

        if (occurences >= 2) {
        //   console.log("includes ", line, key);
            console.log(this.replaceTextRules(line, key));
          //   line = this.addHeadingContent(text, key);
        }
      });

      return line;
    });

    console.log("FINAL ", final);
    return final.join(this.BREAK);
  }

  protected static replaceHeadingsRules(text: string, key: string): string {
    return text.replace(`${key} `, MarkdownRules.headingRules.get(key));
  }

  protected static addHeadingContent(text: string, key: string): string {
    const value = text.split(MarkdownRules.headingRules.get(key));
    return text
      .replace(this.CONTENT_PLACEHOLDER, value[1])
      .slice(0, -value[1].length);
  }

  protected static replaceTextRules(text: string, key: string): string {
    //TODO: improve
    // const list = key.split('');
    // const value = text.match(new RegExp("\\"+list[0]+"\\"+list[0]+"(.*?)"+list[0]+"\\"+list[0]+""));

    // text.replace(new RegExp(key, 'g'), '|');
    
    console.log('1', text);
    // return MarkdownRules.rules.get(key).replace(this.TEXT_CONTENT, item);
    return ''
  }

  private static countTextOccurences(text: string, key: string): number {
    return text.split(key).length - 1;
  }
  /* 
  

  

   */
}
