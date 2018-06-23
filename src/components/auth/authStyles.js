import {
  INPUTFIELDCOLOR,
  CRIMSONCOLOR,
  BACKGROUNDCOLOR,
  TEXTLINKCOLOR,
} from '../../config/colors';

export default {
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUNDCOLOR,
  },
  inputStyle: {
    backgroundColor: INPUTFIELDCOLOR,
    margin: 5,
    borderColor: INPUTFIELDCOLOR,
  },
  blockButtonStyle: {
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: CRIMSONCOLOR,
  },
  textButtonStyle: {
    textDecorationLine: 'underline',
    color: TEXTLINKCOLOR,
  },
  titleStyle: {
    fontSize: 50,
    textAlign: 'center',
    color: TEXTLINKCOLOR,
  },
};
