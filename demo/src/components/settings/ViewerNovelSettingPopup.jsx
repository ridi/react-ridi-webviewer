import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThemeSetting from './ThemeSetting';
import ViewTypeSetting from './ViewTypeSetting';
import FontSetting from './FontSetting';
import NovelSpineSetting from './NovelSpineSetting';
import ColumnSetting from './ColumnSetting';
import { ViewType } from '../../../../lib';
import { ViewerSpinType } from '../../constants/SettingConstants';
import BaseSettingPopup, { mapStateToProps } from './BaseSettingPopup';

class ViewerNovelSettingPopup extends BaseSettingPopup {
  renderSettings() {
    const { content, setting } = this.props;
    return (
      <ul className="setting_group">
        <ThemeSetting
          onChanged={colorTheme => this.onSettingChanged({ colorTheme })}
        />
        <ViewTypeSetting
          onChanged={viewType => this.onSettingChanged({ viewType })}
          contentViewType={content.viewType}
        />
        { setting.viewType === ViewType.PAGE
        ? <ColumnSetting onChanged={changedSetting => this.onSettingChanged(changedSetting)} /> : null }
        <FontSetting
          onChanged={font => this.onSettingChanged({ font })}
        />

        {ViewerSpinType.toList().map(item => (
          <NovelSpineSetting
            item={item}
            key={item}
            onChanged={changedSetting => this.onSettingChanged(changedSetting)}
          />
        ))}
      </ul>
    );
  }
}

ViewerNovelSettingPopup.propTypes = {
  content: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ViewerNovelSettingPopup);
