import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let commponent;

    beforeEach(()=>{
        const props = { comments: ['New comment', 'Comment 2'] };
        commponent = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment' , ()=>{
        expect(commponent.find('li').length).to.equal(2);
    });


    it('shows each comment that is provided' , ()=>{
        expect(commponent).to.contain('New comment');
        expect(commponent).to.contain('Comment 2');
    });

})