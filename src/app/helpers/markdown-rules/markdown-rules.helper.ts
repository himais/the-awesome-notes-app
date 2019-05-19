export class MarkdownRules{
    public static headingRules = new Map([
        ['#', '<h1>{content}</h1>'],
        ['##', '<h2>{content}</h2>'],
    ]);

    public static textRules = new Map([
        ['**', '<strong>{content}</strong>']
    ])
}