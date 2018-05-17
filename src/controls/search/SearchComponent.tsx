import * as React from 'react';
import { ISearchProps, ISearchState } from './ISearchComponent';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { SPHttpClient } from '@microsoft/sp-http';
import styles from './SearchComponent.module.scss';
import * as appInsights from '../../common/appInsights';
import {
  assign
} from 'office-ui-fabric-react/lib/Utilities';
import { autobind, ISearchBoxProps } from 'office-ui-fabric-react';

/**
* Search component
*/
export class Search extends React.Component<ISearchProps, ISearchState> {
  
/**
* Constructor
*/
constructor(props: ISearchProps) {
  super(props);
  this.state = {
    searchResults: []
  };
 
  appInsights.track('ReactSearch', {
    searchScopePath: !!props.searchScopePath,
    searchResultSources: !!props.searchResultSources,
    searchResultsPageLimit: !!props.searchResultsPageLimit,
    searchResultsPagingOrScroll: !!props.searchResultsPagingOrScroll,
    searchtooltipMessage: !!props.searchtooltipMessage,
    showCallOut: !!props.showCallOut,
    searchResultsLimit: !!props.searchResultsLimit,
    isEmptySearch: !!props.isEmptySearch,
  });
  }

  public componentWillMount(): void {
    
  }
//#endregion

/**
 * Default React component render method
 */
public render(): React.ReactElement<ISearchProps> {
  return (
    <div></div>
  );
  }
}



