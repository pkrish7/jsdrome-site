/* eslint-disable */
import React from "react";
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

import Adsense from '../Adsense/Adsense';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'justify',
  },
});

const options = {
  overrides: {
    a: { component: Link },
    h1: { component: props => <Typography gutterBottom variant="h5" {...props} /> },
    h2: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
    h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> },
    h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> },
    p: { component: withStyles(styles)(({ classes, ...props }) => <Typography classes={{ body2: classes.paragraph }} variant="body2" paragraph {...props} />) },
    li: { component: withStyles(styles)(({ classes, ...props }) => <li className={classes.listItem}><Typography component="span" {...props} /></li>) },
    span: { component: withStyles(styles)(({ classes, ...props }) => <Typography classes={{ body2: classes.paragraph }} variant="body2" paragraph {...props} />) },
  },
};

export default props => <React.Fragment>
  <ReactMarkdown options={options} {...props} />
  <Adsense
    adFormat="fluid"
    adClient="ca-pub-6831276331714408"
    adSlot="3393854253"
    layoutKey="-gp-3+15-68+ah" />
</React.Fragment>;
