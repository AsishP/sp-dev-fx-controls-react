import { IPersonaProps, DirectionalHint } from "office-ui-fabric-react";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { SearchPaging } from "./SearchConstants";

/**
 * Used to display a placeholder in case of no or temporary content. Button is optional.
 *
 */
export interface ISearchProps {
  /**
   * Context of the component
   */
  context: WebPartContext;
  /**
   * show search results as Call out
   */
  showCallOut?: boolean;
  /**
   * Search Scope Path
   */
  searchScopePath?: string;
  /**
   * search refiners
   */
  searchResultSources?: any[];
  /** 
   * Text on the Control 
  */
  titleText: string;
  /**
   * Total number of Results
   */
  searchResultsLimit?: number;
  /**
   * Search results show in paging or scroll
   */
  searchResultsPagingOrScroll? : SearchPaging;
  /**
   * Number of search results in one page or scroll
   */
  searchResultsPageLimit? : boolean;
  /**
   * show results in continuous scroll
   */
  isEmptySearch? : boolean;
  /**
   * Mandatory field error message
   */
  errorMessage? : string;
  /**
   * Method to check value of People Picker text
   */
  searchResults?: (items: any[]) => void; 
  /**
   * Tooltip Message
   */
  searchtooltipMessage? : string;
  /**
   * Directional Hint of tool tip
   */
  tooltipDirection? : DirectionalHint;
}

export interface ISearchState {
  searchResults: any[];
}
