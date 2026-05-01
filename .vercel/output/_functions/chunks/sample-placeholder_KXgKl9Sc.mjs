import { n as createVNode, ay as Fragment, az as __astro_tag_component__ } from './astro/server_DH321-jr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Untangling a 6-year-old Salesforce org for a 40-person services firm",
  "client": "[Client name pending approval]",
  "industry": "Professional Services",
  "summary": "Six years of accumulated automations, dead fields, and out-of-date sharing rules had ground the team's CRM to a crawl. We audited, simplified, and rebuilt the workflow around how the firm actually sells today.",
  "services": ["Optimization", "Admin-as-a-Service"],
  "metric": {
    "value": "−42%",
    "label": "Time-to-quote"
  },
  "order": 1,
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "the-starting-point",
    "text": "The starting point"
  }, {
    "depth": 1,
    "slug": "what-we-did",
    "text": "What we did"
  }, {
    "depth": 1,
    "slug": "what-changed",
    "text": "What changed"
  }, {
    "depth": 1,
    "slug": "whats-next",
    "text": "What’s next"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h1: "h1",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "the-starting-point",
      children: "The starting point"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note for the team:"
        }), " this is a placeholder MDX entry so the collection isn’t empty. Replace the body with the real engagement once the client approves the case study."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The firm had been on Salesforce for six years. Three admins had come and gone. Two SIs had layered automations on top of each other. The result: every new opportunity required four duplicate-record warnings, three approval steps that no longer matched the org chart, and a quote document that pulled fields three of which had been deprecated two years earlier."
    }), "\n", createVNode(_components.h1, {
      id: "what-we-did",
      children: "What we did"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ran a 2-week org health audit — security, automation, technical debt, reports."
      }), "\n", createVNode(_components.li, {
        children: "Built a prioritized backlog scored on effort and impact."
      }), "\n", createVNode(_components.li, {
        children: "Migrated 14 process builders and 9 workflow rules into 6 consolidated Flows."
      }), "\n", createVNode(_components.li, {
        children: "Retired 47 unused fields and 12 unused record types."
      }), "\n", createVNode(_components.li, {
        children: "Rebuilt the quote-to-cash flow with the head of revenue in the room."
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "what-changed",
      children: "What changed"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Time-to-quote dropped from 28 minutes to 16."
      }), "\n", createVNode(_components.li, {
        children: "Average opportunity stage time reduced by 6 days."
      }), "\n", createVNode(_components.li, {
        children: "The team stopped “exporting to Excel to actually see the pipeline.”"
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "whats-next",
      children: "What’s next"
    }), "\n", createVNode(_components.p, {
      children: "We’re now embedded as their admin-as-a-service partner: biweekly releases, quarterly roadmap, no full-time admin headcount needed."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/case-studies/sample-placeholder.mdx";
const file = "/Users/jesse/Code/northstrider-consulting-website/src/content/case-studies/sample-placeholder.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jesse/Code/northstrider-consulting-website/src/content/case-studies/sample-placeholder.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
