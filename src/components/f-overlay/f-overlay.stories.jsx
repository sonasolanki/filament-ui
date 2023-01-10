import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'display/overlay',
  args: {
    blockScrolling: false,
    escToClose: false,
    visible: false
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'atomic'
    }
  }
};

const Template = (args) => (
  <div>
    <div>
      Lorem ipsum dolor sit amet. Vel ducimus tempore et voluptates in facilis porro eum quae enim ipsa libero et quas galisum. Sed sint doloremque qui molestiae reprehenderit eum officiis molestiae est officia ipsam hic ipsa voluptatibus et nobis quam sed odio dignissimos.
      <br/>
      Et consequatur iure et iste corporis et modi dolor qui iste architecto sit officiis officiis vel quae molestiae eum consequatur voluptates. Eum deleniti quidem est rerum consequatur est officia ratione quo similique dolorum At quibusdam neque a harum nisi? Quo deleniti harum sit odio sunt illo quod est velit rerum est culpa consequatur eum nihil sunt!
      <br/>
      Sit distinctio eius ex voluptas neque cum deleniti reprehenderit et culpa autem et modi nobis ut fuga ullam sit perspiciatis mollitia. Et magnam quam ut repudiandae iste hic dolor aliquam aut fugit sint aut omnis laborum. Aut reprehenderit voluptatem hic quasi rerum qui distinctio quisquam et earum voluptatem quo molestiae consequatur ut voluptatem tempore non dolorum galisum.
    </div>
    <f-overlay {...args}></f-overlay>
  </div>
);

export const Default = Template.bind({});
Default.storyName = 'Default';
