import { IPersonaProps } from "office-ui-fabric-react";
import { WebPartContext } from '@microsoft/sp-webpart-base';

/**
 * Used to display a placeholder in case of no or temporary content. Button is optional.
 *
 */
export interface IPeoplePickerProps {
  /**
   * 
   */
  context: WebPartContext;
  /** 
   * Unique ID of Group
  */
  groupID?: string;
  /**
   * Name of SharePoint Group
   */
  groupName?: string;
  /**
   * image Initials
   */
  getAllUsers?: boolean;
  /** 
   * Text of the Control 
  */
  titleText: string;
  /**
   * Selection Limit of Control
   */
  personSelectionLimit?: number;
}

export interface IPeoplePickerState {
  selectedPersons?: IPersonaProps[];
  mostRecentlyUsedPersons: IPersonaProps[];
  currentSelectedPersons: IPersonaProps[];
  allPersons: [{
    id: string,
    imageUrl: string,
    imageInitials: string,
    primaryText: string, //Name
    secondaryText: string, //Role
    tertiaryText: string, //status
    optionalText: string //stgring
  }];
  delayResults?: boolean;
  currentPicker?: number | string;
  peoplePersonaMenu?: IPersonaProps[];
  peoplePartTitle: string;
  peoplePartTooltip : string;
  isLoading : boolean;
}
