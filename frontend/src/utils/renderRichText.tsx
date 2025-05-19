import React, { ReactNode } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// Define the structure of rich text nodes from Strapi
interface TextNode {
  type?: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  [key: string]: unknown;
}

interface RichTextNode {
  type: string;
  children?: Array<TextNode | RichTextNode>;
  level?: number;
  format?: string;
  url?: string;
  alt?: string;
  caption?: string;
  code?: string;
  [key: string]: unknown;
}

// Helper function to render text nodes with formatting
const renderTextNode = (node: TextNode, key: number): ReactNode => {
  let text: ReactNode = node.text || '';
  
  // Apply formatting in the correct order
  if (node.bold) text = <strong key={`bold-${key}`}>{text}</strong>;
  if (node.italic) text = <em key={`italic-${key}`}>{text}</em>;
  if (node.underline) text = <u key={`underline-${key}`}>{text}</u>;
  if (node.strikethrough) text = <s key={`strikethrough-${key}`}>{text}</s>;
  if (node.code) text = <code key={`code-${key}`} className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">{text}</code>;
  
  return text;
};

// Type guard to check if a node is a text node
const isTextNode = (node: TextNode | RichTextNode): node is TextNode => {
  return 'text' in node;
};

export const renderRichText = (content: RichTextNode[]): ReactNode => {
  if (!content) return null;
  if (!content || !Array.isArray(content)) return null;
  
  return content.map((node, i) => {
    if (!node) return null;
    
    const { type, children = [] } = node;
    
    if (!children || !Array.isArray(children)) return null;

    // Render child nodes
    const renderedChildren = children.map((child, j) => {
      if (!child) return null;
      
      // Handle text nodes
      if (isTextNode(child)) {
        return renderTextNode(child, j);
      }
      
      // Recursively render nested rich text nodes
      if (child.children) {
        return (
          <React.Fragment key={j}>
            {renderRichText([child])}
          </React.Fragment>
        );
      }
      
      return null;
    }).filter((node): node is NonNullable<ReactNode> => node !== null);
    
    // If no valid children, return null
    if (renderedChildren.length === 0) return null;
    
    // Handle different node types
    switch (type) {
      case 'heading': {
        const level = (node.level || 2) as HeadingLevel;
        const headingLevel = Math.min(6, Math.max(1, level)) as HeadingLevel;
        const className = 'font-bold my-6';
        
        switch (headingLevel) {
          case 1: return <h1 key={i} className={`text-4xl ${className}`}>{renderedChildren}</h1>;
          case 2: return <h2 key={i} className={`text-3xl ${className}`}>{renderedChildren}</h2>;
          case 3: return <h3 key={i} className={`text-2xl ${className}`}>{renderedChildren}</h3>;
          case 4: return <h4 key={i} className={`text-xl ${className}`}>{renderedChildren}</h4>;
          case 5: return <h5 key={i} className={`text-lg ${className}`}>{renderedChildren}</h5>;
          case 6: 
          default: return <h6 key={i} className={`text-base ${className}`}>{renderedChildren}</h6>;
        }
      }
        
      case 'paragraph':
        return <p key={i} className="my-6 leading-relaxed">{renderedChildren}</p>;
        
      case 'blockquote':
        return (
          <blockquote 
            key={i} 
            className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 my-6 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-r"
          >
            {renderedChildren}
          </blockquote>
        );
        
      case 'code':
        return (
          <div key={i} className="my-6">
            <pre className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="font-mono text-gray-100">{node.code}</code>
            </pre>
            {node.caption && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                {node.caption}
              </p>
            )}
          </div>
        );
        
      case 'link':
        return (
          <a 
            key={i} 
            href={node.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
          >
            {renderedChildren}
          </a>
        );
        
      case 'image':
        return (
          <figure key={i} className="my-8">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={node.url} 
                alt={node.alt || ''} 
                className="rounded-lg max-w-full h-auto shadow-lg"
                loading="lazy"
              />
            </div>
            {node.caption && (
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                {node.caption}
              </figcaption>
            )}
          </figure>
        );
        
      case 'list':
        return node.format === 'ordered' ? (
          <ol key={i} className="list-decimal pl-8 my-4 space-y-2">
            {renderedChildren}
          </ol>
        ) : (
          <ul key={i} className="list-disc pl-8 my-4 space-y-2">
            {renderedChildren}
          </ul>
        );
        
      case 'list-item':
        return (
          <li key={i} className="mb-2">
            {renderedChildren}
          </li>
        );
        
      default:
        return (
          <div key={i} className="my-4">
            {renderedChildren}
          </div>
        );
    }
  });
};

export const renderPlainText = (content: RichTextNode[]): string => {
  if (!content || !Array.isArray(content)) return '';
  
  return content.map(node => {
    if (!node) return '';
    
    if (node.text) {
      return node.text;
    }
    
    if (node.children) {
      return node.children
        .map(child => 
          'text' in child ? child.text : 
          'children' in child ? renderPlainText([child])
          : ''
        )
        .join('');
    }
    
    return '';
  }).join('\n');
};
